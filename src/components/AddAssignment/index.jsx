"use client";
import {
  TeacherCoursesProvider,
  useTeacherCourses,
} from "@/context/TeacherCourses";
import { cpp } from "@codemirror/lang-cpp";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { useEffect, useRef, useState } from "react";
import RecorderButton from "../Button/recorderButton";
import { useMutation } from "@tanstack/react-query";
import AddAssignmentModal from "./add-assignment";
import { addAssignment } from "@/actions/actions";
import { toast } from "sonner";

const doc = `#include <iostream>
using namespace std;\n
int main() {
  // Start Coding in C++
  return 0;
}`;

const AddAssignment = ({ teacher_id }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const { title, courseId, setIsOpen } = useTeacherCourses();

  const addAssignmentMutation = useMutation({
    mutationFn: () =>
      addAssignment(title, editor?.state.doc.toString(), courseId),
    onSuccess: () => {
      toast.success("Assignment created successfully");
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to create Assignment");
    },
  });

  useEffect(() => {
    if (!editorRef.current || editor) return;

    const state = EditorState.create({
      doc: doc,
      extensions: [...basicSetup, cpp()],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    setEditor(view);

    return () => view.destroy();
  }, [editorRef]);
  return (
    <>
      <div className="mb-4 flex flex-wrap justify-end items-center gap-4">
        <RecorderButton
          onClick={() => setIsOpen(true)}
          label={"Add to Courses"}
          parentClass={""}
          className={`bg-white text-black w-full`}
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
      </div>
      <AddAssignmentModal
        createAssignment={() => addAssignmentMutation.mutate()}
        createAssignmentLoading={addAssignmentMutation.isPending}
      />
    </>
  );
};

export default AddAssignment;
