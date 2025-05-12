import { Button } from "@/components/ui/button";
import DashboardHeadingWrapper from "../Dashboard/Wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Card = ({
  setIsModalOpen,
  setRender,
  submissions,
  setCode,
  setSubmissionId,
  setFeedback,
}) => {
  const [selectedAssignment, setSelectedAssignment] = useState("all");

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

  // Get unique assignment names
  const assignmentOptions = Array.from(
    new Set(submissions.map((item) => item.name))
  );

  // Filtered submissions based on selected assignment
  const filteredSubmissions =
    selectedAssignment === "all"
      ? submissions
      : submissions.filter((item) => item.name === selectedAssignment);

  return (
    <DashboardHeadingWrapper heading={"Submissions"}>
      <Command className="">
        <div className="flex items-center gap-8 justify-between mb-4">
          <CommandInput placeholder="Type a search..." />
          <Select
            onValueChange={(value) => setSelectedAssignment(value)}
            value={selectedAssignment}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Assignment" />
            </SelectTrigger>
            <SelectContent className="bg-[#0F0E10] text-white">
              <SelectItem value="all">All Assignments</SelectItem>
              {assignmentOptions.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <div className="flex flex-col gap-4">
              {filteredSubmissions.map((item, index) => {
                const { enroll, name, feedback, code, submission_id } = item;
                const isFeedback = feedback !== "";
                return (
                  <CommandItem
                    key={index}
                    value={`${enroll} ${name}`}
                    className="p-4 border border-[rgba(255,255,255,0.1)] 
                    rounded-[12px] bg-[#0F0E10] hover:bg-[#0F0E10]
                    hover:border-[rgba(255,255,255,0.35)]
                    flex flex-wrap items-center justify-between text-white"
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
                    <h1 className="w-[344px] truncate">Assignment: {name}</h1>
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
                  </CommandItem>
                );
              })}
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </DashboardHeadingWrapper>
  );
};

export default Card;

export const SkeletonSubmissions = () => {
  return (
    <DashboardHeadingWrapper heading={"Submissions"}>
      <div className="flex items-center gap-8 justify-between mb-4">
        <div className="h-10 w-full max-w-md bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-[200px] bg-gray-200 rounded-md animate-pulse" />
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(6)].map((_, index) => (
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
                <div className="h-4 w-24 bg-gray-200 animate-pulse rounded-full" />
              </div>
            </div>
            <div className="w-[108.188px] text-right">
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded-full mx-auto" />
            </div>
            <div className="w-[344px] truncate">
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded-full" />
            </div>
            <div className="w-[132px] flex justify-end">
              <div className="h-10 w-24 bg-gray-200 animate-pulse rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </DashboardHeadingWrapper>
  );
};
