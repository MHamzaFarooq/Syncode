const CodeEditor = ({ code }) => {
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
