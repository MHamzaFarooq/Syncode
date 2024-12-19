"use client";
import { useEffect, useRef, useState } from "react";
import FormWrapper from "../Authentication/FormWrapper";
import Button from "@/assets/Button";
import CodeBlock from "../CodeBlock";
import CustomTextArea from "./textarea";

const FeedbackModal = ({ render, isModalOpen, setIsModalOpen }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsModalOpen(false);
        setInput("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const codeFromAPI = `// Write a C++ code to print “Hello, World!”
  #include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, World!";
      return 0;
  }`;

  return (
    <div
      className={`${
        isModalOpen
          ? "opacity-100  scale-100 pointer-events-auto bg-[rgba(0,0,0,0.6)]"
          : "opacity-0 scale-75 pointer-events-none"
      } fixed inset-0 flex justify-center items-center z-[100]
        transition-all duration-200 ease-linear`}
    >
      <div ref={boxRef} className="text-black flex justify-center items-center">
        <FormWrapper
          className={"max-w-[550px]"}
          heading={render === "feedback" ? "Feedback Page" : "Reviewed Page"}
          headingClassName={"text-2xl font-medium"}
        >
          <div className="w-full mb-4">
            <CodeBlock code={codeFromAPI} />
          </div>
          <div className="mt-4 w-full">
            <div className="p-4 bg-[#0F0E10] rounded-xl">
              {render === "feedback" ? (
                <CustomTextArea input={input} handleChange={handleChange} />
              ) : (
                <div className="text-xs leading-[18px]">
                  Nice job! The code is clean and works perfectly. Next, try
                  adding comments or experimenting with user input. Keep going!
                </div>
              )}
            </div>
            <div className="mt-4 w-full">
              <Button
                className="w-full bg-white text-black"
                parentClass="w-full"
                label={render === "feedback" ? "Submit" : "Back"}
              />
            </div>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default FeedbackModal;
