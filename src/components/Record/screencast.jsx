"use client";

import { uploadVideo } from "@/actions/actions";
import { cpp } from "@codemirror/lang-cpp";
import { Compartment, EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useMutation } from "@tanstack/react-query";
import { basicSetup } from "codemirror";
import JSCPP from "JSCPP";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import RecorderButton from "../Button/recorderButton";
import AddCoursesModal from "./add-courses";
import { useTeacherCourses } from "@/context/TeacherCourses";

// const doc = `#include <iostream>
// using namespace std;\n
// int main() {
//   cout << "Enter two numbers to add:" << endl;\n
//   int a, b;
//   cin >> a >> b;\n
//   int sum = a + b;
//   cout << "The sum of " << a << " and " << b << " is: " << sum << endl;\n
//   return 0;
// }`;

const doc = `#include <iostream>
using namespace std;\n
int main() {
  // Start Coding in C++
  return 0;
}`;

const Screencast = ({ teacher_id }) => {
  const { title, courseId, setIsOpen } = useTeacherCourses();
  const uploadVideoMutation = useMutation({
    mutationFn: () => uploadVideo(courseId, title, events, audioBlob),
    onSuccess: () => {
      toast.success("Video created Successfully");
    },
    onError: (error) => {
      if (error.custom) {
        toast.error(error.message || "Create a video failed");
      } else {
        toast.error(error?.error || "Create a video failed");
      }
    },
  });

  const createVideo = () => {
    uploadVideoMutation.mutate();
  };

  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const audioRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [events, setEvents] = useState([]);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [pausedAt, setPausedAt] = useState(null);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const updateListenerCompartment = useRef(new Compartment());

  useEffect(() => {
    if (!editorRef.current || editor) return;

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged && recording) {
        setEvents((prev) => [
          ...prev,
          { time: Date.now(), text: update.state.doc.toString() },
        ]);
      }
    });

    const state = EditorState.create({
      doc: doc,
      extensions: [
        ...basicSetup,
        cpp(),
        updateListenerCompartment.current.of(updateListener),
      ],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    setEditor(view);

    return () => view.destroy();
  }, [editorRef]);

  useEffect(() => {
    if (!editor) return;

    editor.dispatch({
      effects: updateListenerCompartment.current.reconfigure(
        EditorView.updateListener.of((update) => {
          if (update.docChanged && recording) {
            setEvents((prev) => [
              ...prev,
              { time: Date.now(), text: update.state.doc.toString() },
            ]);
          }
        })
      ),
    });
  }, [recording]);

  const startRecording = async () => {
    setEvents([]);
    setSliderValue(0);
    setRecording(true);
    setPausedAt(null);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    let chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      setAudioBlob(blob);
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
    };

    recorder.start();
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorder?.stop();
  };

  const playRecording = () => {
    if (events.length === 0 || !editor || !audioRef.current) return;

    setPlaying(true);
    const audio = audioRef.current;
    const startTime = events[0].time;
    const normalizedEvents = events.map((e) => ({
      ...e,
      relativeTime: e.time - startTime,
    }));

    let i = 0;

    const checkAndUpdate = () => {
      const currentAudioTime = audio.currentTime * 1000;

      while (
        i < normalizedEvents.length &&
        normalizedEvents[i].relativeTime <= currentAudioTime
      ) {
        editor.dispatch({
          changes: {
            from: 0,
            to: editor.state.doc.length,
            insert: normalizedEvents[i].text,
          },
        });
        i++;
      }

      if (i < normalizedEvents.length) {
        requestAnimationFrame(checkAndUpdate);
      } else {
        setPlaying(false);
      }
    };

    audio.play();
    requestAnimationFrame(checkAndUpdate);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    const timeToSeek = events[event.target.value]?.time || 0;

    if (editor) {
      const textAtTime = events[event.target.value]?.text || "";
      editor.dispatch({
        changes: { from: 0, to: editor.state.doc.length, insert: textAtTime },
      });
    }

    if (playing) {
      setPausedAt(timeToSeek);
      setPlaying(false);
    }
  };

  const runCode = () => {
    if (editor && !isRunning) {
      setIsRunning(true);
      setOutput("Running...");

      const code = editor.state.doc.toString();

      // Use setTimeout to allow the "Running..." message to render
      setTimeout(() => {
        try {
          // Configure JSCPP with the user's input
          const config = {
            stdio: {
              write: function (data) {
                setOutput((prev) => prev + data);
              },
              read: function () {
                const inputLines = input.split("\n");
                if (this.readCounter === undefined) {
                  this.readCounter = 0;
                }
                if (this.readCounter < inputLines.length) {
                  const line = inputLines[this.readCounter];
                  this.readCounter++;
                  return line;
                } else {
                  return "";
                }
              },
              readCounter: 0,
            },
            memory: 1024 * 1024 * 32, // 32MB
            compileOptions: {
              clangArgs: "-std=c++17",
            },
          };

          // Clear previous output
          setOutput("");

          // Run the C++ code
          const exitCode = JSCPP.run(code, input, config);

          // Add exit code to output
          setOutput((prev) => prev + `\nProcess exited with code ${exitCode}`);
        } catch (error) {
          setOutput(`Compilation/Runtime Error:\n${error.message}`);
        } finally {
          setIsRunning(false);
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [runCode]);

  return (
    <>
      <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
        <RecorderButton
          onClick={recording ? stopRecording : startRecording}
          label={recording ? "Stop Recording" : "Start Recording"}
          parentClass={""}
          className={`${recording ? "bg-red-500" : "bg-[#0000FF]"} w-full`}
        />
        <RecorderButton
          onClick={playRecording}
          disabled={playing || events.length === 0}
          label={playing ? "Playing" : "Play Recording"}
          parentClass={""}
          className={`${
            playing || events.length === 0
              ? "bg-[#1C1C1C] cursor-not-allowed"
              : "bg-green-500"
          } w-full`}
        />
        <RecorderButton
          onClick={() => setIsOpen(true)}
          label={"Add to Courses"}
          parentClass={""}
          className={`bg-white text-black w-full`}
        />
        <RecorderButton
          onClick={runCode}
          label={isRunning ? "Running..." : "Run Code (Ctrl+K)"}
          disabled={playing || isRunning}
          parentClass={""}
          className={`${
            playing || isRunning
              ? "bg-[#0000FF]/50 cursor-not-allowed"
              : "bg-[#0000FF]"
          } w-full`}
        />
      </div>
      <div
        className="relative flex-1 text-white
        border border-[#FFFFFF26]
        bg-[#010305] rounded-xl
        flex flex-col"
      >
        <div className="text-[#FFFFFF40] font-medium text-center py-4">
          C++ Coding Space
        </div>
        <div ref={editorRef} className="flex-1 w-full bg-[#010305]"></div>
        <div
          className="w-full 
          flex flex-col
          rounded-t-xl overflow-hidden"
        >
          <div className="flex bg-[#09334E]">
            <h3 className="px-4 py-[18.5px] text-[#B6C7D0] font-medium flex-grow">
              Output:
            </h3>
            <button
              onClick={() => setOutput("")}
              className="px-4 py-[18.5px] text-[#B6C7D0] hover:text-white"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-col md:flex-row h-full">
            <pre className="p-4 flex-1 whitespace-pre-wrap break-words overflow-auto">
              {output}
            </pre>
            <div className="p-4 w-full md:w-1/3 bg-[#010305] border-l border-[#FFFFFF26]">
              <div className="mb-2 text-[#B6C7D0]">Input:</div>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter input for cin..."
                className="w-full h-32 bg-[#0A0D12] border border-[#FFFFFF26] p-2 rounded text-white"
                disabled={isRunning}
              />
            </div>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max={events.length - 1}
              value={sliderValue}
              onChange={handleSliderChange}
              disabled={playing || events.length === 0}
              className="w-full"
            />
          </div>
          {audioURL && (
            <audio
              ref={audioRef}
              src={audioURL}
              controls
              className="w-full mt-4"
            />
          )}
        </div>
      </div>
      <AddCoursesModal
        createVideo={createVideo}
        createVideoLoading={uploadVideoMutation.isPending}
      />
    </>
  );
};

export default Screencast;
