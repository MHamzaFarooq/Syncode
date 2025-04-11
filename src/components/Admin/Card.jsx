import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { submissions } from "@/utils/submissions";
import DashboardHeadingWrapper from "../Dashboard/Wrapper";

const Card = ({ setIsModalOpen, setRender }) => {
  const handleFeedbackOpen = () => {
    setIsModalOpen(true);
    setRender("feedback");
  };
  const handleReviewedOpen = () => {
    setIsModalOpen(true);
    setRender("reviewed");
  };
  return (
    <DashboardHeadingWrapper heading={"Submissions"}>
      <div className="flex flex-col gap-4">
        {submissions.map((item, index) => {
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
                  <h1 className="text-[16px] font-medium">{item.enrollment}</h1>
                </div>
                {item.feedback && <Badge variant="default">New</Badge>}
              </div>
              <h1 className="w-[108.188px] text-right">Submitted</h1>
              <h1 className="w-[344px] truncate">
                Assignment: {item.assignmentNo} {item.assignmentDesc}
              </h1>
              <div className="w-[132px] flex justify-end">
                {item.feedback ? (
                  <Button onClick={handleFeedbackOpen} variant="secondary">
                    Give Feedback
                  </Button>
                ) : (
                  <Button onClick={handleReviewedOpen} variant="default">
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
