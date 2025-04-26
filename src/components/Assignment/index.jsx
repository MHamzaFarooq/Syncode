"use client";
import { getAssignment } from "@/actions/actions";
import { cpp } from "@codemirror/lang-cpp";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useQuery } from "@tanstack/react-query";
import { basicSetup } from "codemirror";
import { useEffect, useRef, useState } from "react";
import CodeEditor from "./codeEditor";

const Assignment = ({ assignment_id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["assignment", assignment_id],
    queryFn: () => getAssignment(assignment_id),
  });

  return (
    <main className="px-2 pt-9 min-h-screen flex flex-col">
      {isLoading ? (
        <div>Loading Video... </div>
      ) : isError ? (
        <div>
          <p>Something went wrong</p>
          <p className="text-red-500">
            Error: {error?.error || "Assignment not found"}
          </p>
        </div>
      ) : (
        <CodeEditor code={data?.code} />
      )}
    </main>
  );
};

export default Assignment;
