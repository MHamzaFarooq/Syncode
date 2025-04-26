import { cpp } from "@codemirror/lang-cpp";
import { Compartment, EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import JSCPP from "JSCPP";
import { useEffect, useRef, useState } from "react";
import CodingSpaceHeader from "./codingSpaceHeader";
import HeaderPut from "./headerput";
import VideoPlayerOutput from "./output";

const doc = `#include <iostream>
using namespace std;\n
int main() {
  // Start Coding in C++
  return 0;
}`;

const LoadedPlayer = ({ eventsState, audioURL }) => {
  const parsedEvents = JSON.parse(eventsState);
  const editorRef = useRef(null);
  const audioRef = useRef(null);
  const inputRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [events, setEvents] = useState(parsedEvents);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [pausedAt, setPausedAt] = useState(null);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const updateListenerCompartment = useRef(new Compartment());
  const [isPaused, setIsPaused] = useState(false);

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

  const resumeRecording = () => {
    if (!editor || !audioRef.current || pausedAt === null) return;

    const audio = audioRef.current;
    setPlaying(true);
    const startTime = events[0].time;
    const normalizedEvents = events.map((e) => ({
      ...e,
      relativeTime: e.time - startTime,
    }));

    // Set audio time to pausedAt
    audio.currentTime = (pausedAt - startTime) / 1000;

    let i = events.findIndex((e) => e.time >= pausedAt);

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
        setPausedAt(null);
      }
    };

    audio.play();
    requestAnimationFrame(checkAndUpdate);
  };

  useEffect(() => {
    if (!editor) return;

    const dom = editor.dom;

    const handleEditorClick = () => {
      if (playing) {
        audioRef.current?.pause();
        setPausedAt(audioRef.current.currentTime * 1000 + events[0].time);
        setPlaying(false);
      }
    };

    dom.addEventListener("mousedown", handleEditorClick);

    return () => dom.removeEventListener("mousedown", handleEditorClick);
  }, [editor, playing]);

  return (
    <>
      <div className="flex-1 flex gap-2">
        <div className="flex-1 border border-[#FFFFFF26] rounded-xl flex flex-col">
          <CodingSpaceHeader />
          <div ref={editorRef} className="flex-1 w-full bg-[#010305]"></div>
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
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="border border-[#FFFFFF26] min-h-[209px] max-h-[209px] rounded-xl overflow-hidden">
            <HeaderPut heading={"Input"} />
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-full p-4 bg-transparent focus:outline-none"
              placeholder="Enter input for cin..."
              disabled={isRunning}
            />
          </div>
          <VideoPlayerOutput output={output} />
        </div>
      </div>
      {audioURL && (
        <audio ref={audioRef} src={audioURL} controls className="w-full mt-4" />
      )}
      <div className="flex items-center gap-4">
        <div
          className={`my-4 bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
        >
          <button
            disabled={playing || events.length === 0}
            onClick={playRecording}
            className={`flex items-center justify-center
          font-medium leading-[31px] text-[15px] tracking-[-1.01%]
          h-[41px] px-[15px] py-[5px]
          rounded-lg 
          ${
            playing || events.length === 0
              ? "bg-[#1C1C1C] cursor-not-allowed"
              : "bg-green-500"
          } w-full`}
          >
            {playing ? "Playing" : "Play Recording"}
          </button>
        </div>

        {pausedAt !== null && !playing && (
          <div
            className={`my-4 bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
          >
            <button
              onClick={resumeRecording}
              className="flex items-center justify-center
            font-medium leading-[31px] text-[15px] tracking-[-1.01%]
            h-[41px] px-[15px] py-[5px]
            rounded-lg bg-blue-500 w-full"
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LoadedPlayer;
