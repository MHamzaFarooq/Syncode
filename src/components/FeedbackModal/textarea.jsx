"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.css";

const CustomTextArea = ({ input, handleChange }) => {
  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = scrollHeight > 100 ? "100px" : `${scrollHeight}px`;
  }, [input]);
  return (
    <textarea
      ref={textareaRef}
      rows={1}
      className={`${styles.scrollbar} resize-none bg-transparent focus:outline-none w-full`}
      placeholder="Write your feedback here..."
      value={input}
      onChange={handleChange}
    />
  );
};

export default CustomTextArea;
