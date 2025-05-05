"use client";
import {
  uploadAssignment,
  getAssignment,
  getSubmissionStatus,
} from "@/actions/actions";
import { cpp } from "@codemirror/lang-cpp";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useMutation, useQuery } from "@tanstack/react-query";
import { basicSetup } from "codemirror";
import { LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import RecorderButton from "../Button/recorderButton";
import JSCPP from "JSCPP";
import BorderButton from "../Button/borderButton";
import { getCodeFeedback } from "@/actions/ai";
import { toast } from "sonner";
import ModalWrapper from "../Modal/wrapper";
import ReactMarkdown from "react-markdown";

const Assignment = ({ assignment_id, student_id }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aiResponse, setAIResponse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["assignment", assignment_id],
    queryFn: () => getAssignment(assignment_id),
  });

  const { data: submissionStatus, isLoading: isSubmissionLoading } = useQuery({
    queryKey: ["submissionStatus", assignment_id, student_id],
    queryFn: () => getSubmissionStatus(assignment_id, student_id),
  });

  useEffect(() => {
    if (!editorRef.current || editor || !data?.code) return;

    const state = EditorState.create({
      doc: data.code,
      extensions: [...basicSetup, cpp()],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    setEditor(view);

    return () => view.destroy();
  }, [editorRef, data?.code]);

  const uploadAssignmentMutation = useMutation({
    mutationFn: () =>
      uploadAssignment(editor?.state.doc.toString(), student_id, assignment_id),
    onSuccess: () => {
      toast.success("Assignment uploaded successfully");
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to upload Assignment");
    },
  });

  const getAIFeedbackMutation = useMutation({
    mutationFn: () => getCodeFeedback(editor?.state.doc.toString()),
    onSuccess: (data) => {
      console.log(data);
      setIsOpen(true);
      setAIResponse(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to get Quick Feedback");
      console.error(error);
    },
  });

  const onSubmit = () => {
    uploadAssignmentMutation.mutate();
    getAIFeedbackMutation.mutate();
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
      <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} title={"AI Feedback"}>
        {aiResponse ? (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          </div>
        ) : (
          <p>Loading feedback...</p>
        )}
        <BorderButton
          label={"Accept"}
          onClick={() => {
            setIsOpen(false);
          }}
          parentClass={"mt-6 w-full"}
          className="w-full bg-white text-black"
        />
      </ModalWrapper>

      <main className="px-2 pt-9 min-h-screen flex flex-col">
        <div className="mb-4 flex flex-wrap justify-end items-center gap-4">
          <RecorderButton
            onClick={runCode}
            label={isRunning ? "Running..." : "Run Code (Ctrl+K)"}
            disabled={isRunning}
            parentClass={""}
            className={`${
              isRunning ? "bg-[#0000FF]/50 cursor-not-allowed" : "bg-[#0000FF]"
            } w-full`}
          />
          <BorderButton
            onClick={onSubmit}
            isLoading={
              uploadAssignmentMutation.isPending ||
              getAIFeedbackMutation.isPending
            }
            label={
              isSubmitted
                ? "Already Submitted"
                : isSubmissionLoading
                ? "Checking..."
                : submissionStatus?.submitted
                ? "Already Submitted"
                : "Submit Assignment"
            }
            disabled={
              submissionStatus?.submitted || isSubmitted || isSubmissionLoading
            }
            loaderColor="#000"
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
          {isLoading ? (
            <div className="flex items-center justify-center flex-1">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : isError ? (
            <div>
              <p>Something went wrong</p>
              <p className="text-red-500">
                Error: {error?.error || "Assignment not found"}
              </p>
            </div>
          ) : (
            <>
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
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Assignment;
