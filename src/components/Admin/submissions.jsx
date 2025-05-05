"use client";
import { useState } from "react";
import FeedbackModal from "../FeedbackModal";
import Card, { SkeletonSubmissions } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getSubmissionsTeacher } from "@/actions/actions";

const Submissions = ({ teacher_id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [render, setRender] = useState("feedback");
  const [code, setCode] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);
  const [feedback, setFeedback] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["teacherSubmissionList", teacher_id],
    queryFn: () => getSubmissionsTeacher(teacher_id),
  });
  return (
    <>
      <FeedbackModal
        render={render}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        code={code}
        submissionId={submissionId}
        teacher_id={teacher_id}
        feedback={feedback}
      />
      {isLoading ? (
        <SkeletonSubmissions />
      ) : (
        <Card
          submissions={data?.submissions}
          setRender={setRender}
          setIsModalOpen={setIsModalOpen}
          setCode={setCode}
          setSubmissionId={setSubmissionId}
          setFeedback={setFeedback}
        />
      )}
    </>
  );
};

export default Submissions;
