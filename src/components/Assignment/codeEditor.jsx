import { cpp } from "@codemirror/lang-cpp";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { useEffect, useRef, useState } from "react";

const CodeEditor = ({ code }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editorRef.current || editor) return;

    const state = EditorState.create({
      doc: code,
      extensions: [...basicSetup, cpp()],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    setEditor(view);

    return () => view.destroy();
  }, [editorRef]);

  return (
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
    </div>
  );
};

export default CodeEditor;
