"use client";
import { addFeedback } from "@/actions/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import FormWrapper from "../Authentication/FormWrapper";
import BorderButton from "../Button/borderButton";
import CodeBlock from "../CodeBlock";
import CustomTextArea from "./textarea";

const FeedbackModal = ({
  render,
  isModalOpen,
  setIsModalOpen,
  code,
  submissionId,
  teacher_id,
  feedback,
}) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const boxRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const addFeedbackMutation = useMutation({
    mutationFn: () => addFeedback(submissionId, teacher_id, input),
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Feedback added successfully");
      // Refetch the submissions list
      queryClient.invalidateQueries(["teacherSubmissionList", teacher_id]);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to add feeback");
    },
  });

  const handleClick = () => {
    if (isSubmitted) return;
    addFeedbackMutation.mutate();
  };

  return (
    <div
      className={`${
        isModalOpen
          ? "opacity-100  scale-100 pointer-events-auto bg-[rgba(0,0,0,0.6)]"
          : "opacity-0 scale-75 pointer-events-none"
      } fixed inset-0 flex justify-center items-center z-[100]
        transition-all duration-200 ease-linear`}
    >
      <div
        ref={boxRef}
        className="text-black flex justify-center items-center max-w-[450px] w-full"
      >
        <FormWrapper
          className={"max-w-[550px]"}
          heading={render === "feedback" ? "Feedback Page" : "Reviewed Page"}
          headingClassName={"text-2xl font-medium"}
        >
          <div className="w-full mb-4">
            <CodeBlock code={code} />
          </div>
          <div className="mt-4 w-full">
            <div className="p-4 bg-[#0F0E10] rounded-xl">
              {render === "feedback" ? (
                <CustomTextArea input={input} handleChange={handleChange} />
              ) : (
                <div className="text-xs leading-[18px]">{feedback}</div>
              )}
            </div>
            <div className="mt-4 w-full">
              {render === "feedback" ? (
                <BorderButton
                  className="w-full bg-white text-black"
                  parentClass="w-full"
                  label={isSubmitted ? "Submitted" : "Submit"}
                  onClick={handleClick}
                  isLoading={addFeedbackMutation.isPending}
                  loaderColor="#000"
                  disabled={
                    isSubmitted || input === "" || addFeedbackMutation.isPending
                  }
                />
              ) : (
                <BorderButton
                  className="w-full bg-white text-black"
                  parentClass="w-full"
                  label={"Back"}
                  onClick={() => setIsModalOpen(false)}
                />
              )}
            </div>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default FeedbackModal;
