"use client";

import React, { useState, useEffect, useRef } from "react";
import { EditorView } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Screencast = () => {
  const editorRef = useRef(null);
  const audioRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [events, setEvents] = useState([]);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [pausedAt, setPausedAt] = useState(null);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
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
      doc: "// Start coding...",
      extensions: [
        ...basicSetup,
        javascript(),
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
    if (editor) {
      const code = editor.state.doc.toString();
      try {
        const result = eval(code);
        setOutput(String(result));
      } catch (error) {
        setOutput(error.toString());
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#121212] text-white flex flex-col">
      <div className="absolute z-10 top-4 right-4 flex space-x-4">
        <button
          onClick={startRecording}
          disabled={recording}
          className={`py-2 px-6 rounded-lg font-semibold ${
            recording
              ? "bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!recording}
          className={`py-2 px-6 rounded-lg font-semibold ${
            !recording
              ? "bg-gray-600"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Stop Recording
        </button>
      </div>

      <div ref={editorRef} className="flex-1 bg-[#1e1e1e] w-full"></div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder="Enter input here"
        />

        <div className="flex justify-center space-x-4">
          <button
            onClick={playRecording}
            disabled={playing || events.length === 0}
            className={`py-2 px-6 rounded-lg font-semibold ${
              playing || events.length === 0
                ? "bg-gray-600"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            Play Recording
          </button>
        </div>

        <div className="my-4">
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

        <button
          onClick={runCode}
          disabled={playing}
          className={`py-2 px-6 rounded-lg font-semibold ${
            playing
              ? "bg-gray-600"
              : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
        >
          Run Code
        </button>

        {audioURL && (
          <audio
            ref={audioRef}
            src={audioURL}
            controls
            className="w-full mt-4"
          />
        )}

        <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white">
          <h3 className="font-semibold">Output:</h3>
          <pre className="whitespace-pre-wrap break-words">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default Screencast;
