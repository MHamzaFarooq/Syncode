import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={tomorrowNightBright}
      showLineNumbers
      wrapLongLines
      wrapLines
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
