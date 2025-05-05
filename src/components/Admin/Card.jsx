import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import DashboardHeadingWrapper from "../Dashboard/Wrapper";

const Card = ({
  setIsModalOpen,
  setRender,
  submissions,
  setCode,
  setSubmissionId,
  setFeedback,
}) => {
  const handleFeedbackOpen = (code, submissionId, feedback) => {
    setCode(code);
    setSubmissionId(submissionId);
    setFeedback(feedback);
    setIsModalOpen(true);
    setRender("feedback");
  };
  const handleReviewedOpen = (code, submissionId, feedback) => {
    setCode(code);
    setSubmissionId(submissionId);
    setFeedback(feedback);
    setIsModalOpen(true);
    setRender("reviewed");
  };
  return (
    <DashboardHeadingWrapper heading={"Submissions"}>
      <div className="flex flex-col gap-4">
        {submissions.map((item, index) => {
          const { enroll, name, feedback, code, submission_id } = item;
          const isFeedback = feedback !== "";

          return (
            <div
              key={index}
              className="p-4 border border-[rgba(255,255,255,0.1)] 
              rounded-[12px] bg-[#0F0E10] 
              hover:border-[rgba(255,255,255,0.35)]
              flex flex-wrap items-center justify-between"
            >
              <div className="flex w-[244px] items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="text-[16px] font-medium">{enroll}</h1>
                </div>
                {!isFeedback && <Badge variant="default">New</Badge>}
              </div>
              <h1 className="w-[108.188px] text-right">Submitted</h1>
              <h1 className="w-[344px] truncate">
                Assignment: {item.assignmentNo} {name}
              </h1>
              <div className="w-[132px] flex justify-end">
                {!isFeedback ? (
                  <Button
                    onClick={() =>
                      handleFeedbackOpen(code, submission_id, feedback)
                    }
                    variant="secondary"
                  >
                    Give Feedback
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      handleReviewedOpen(code, submission_id, feedback)
                    }
                    variant="default"
                  >
                    Reviewed
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardHeadingWrapper>
  );
};

export default Card;

export const SkeletonSubmissions = () => {
  return (
    <DashboardHeadingWrapper heading={"Submissions"}>
      <div className="flex flex-col gap-4">
        {[...Array(6)].map((_, index) => {
          return (
            <div
              key={index}
              className="p-4 border border-[rgba(255,255,255,0.1)] 
              rounded-[12px] bg-[#0F0E10] 
              hover:border-[rgba(255,255,255,0.35)]
              flex flex-wrap items-center justify-between"
            >
              <div className="flex w-[244px] items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="text-[16px] font-medium text-transparent bg-gray-200 animate-pulse rounded-full">
                    01-134212-100
                  </h1>
                </div>
              </div>
              <h1 className="w-[108.188px] text-right text-transparent bg-gray-200 animate-pulse rounded-full">
                Submitted
              </h1>
              <h1 className="w-[344px] truncate text-transparent bg-gray-200 animate-pulse rounded-full">
                Assignment: 1 Printing hello world!
              </h1>
              <div className="w-[132px] flex justify-end">
                <Button
                  onClick={() => {}}
                  className="text-transparent bg-gray-200 animate-pulse rounded-full"
                  variant="default"
                >
                  Reviewed
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardHeadingWrapper>
  );
};
