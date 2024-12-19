import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { submissions } from "@/utils/submissions";

const Card = ({ setIsModalOpen, setRender }) => {
  const handleFeedbackOpen = () => {
    setIsModalOpen(true);
    setRender("feedback");
  };
  const handleReviewedOpen = () => {
    setIsModalOpen(true);
    setRender("reviewed");
  };
  const assignmentMapping = submissions.map((item, index) => {
    return (
      <>
        <div key={index} className="mt-4 w-full cursor-pointer">
          <div className="p-4 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
            <div className="flex items-center justify-between">
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
              <h1>Sumitted</h1>
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
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="my-[72px] p-9">
      <h1 className="text-[32px] font-medium h-[48px]">Submissions</h1>
      {assignmentMapping}
    </div>
  );
};

export default Card;
