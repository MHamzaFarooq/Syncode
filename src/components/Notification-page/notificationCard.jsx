"use client";
import React from "react";
import Card, { CardSkeleton } from "./card";
import { useQuery } from "@tanstack/react-query";
import { getStudentsFeedbackSubmissions } from "@/actions/actions";

const NotificationCard = ({ student_id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["studentsfeedbacksubmissions", student_id],
    queryFn: () => getStudentsFeedbackSubmissions(student_id),
  });
  return (
    <div>
      <div className="p-9">
        <h1 className="text-[32px] font-medium h-[48px]">Notifications</h1>
        {isLoading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {data?.submissions?.map((item, index) => (
              <Card key={index} item={item} index={index + 1} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
