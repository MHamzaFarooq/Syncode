"use client";
import { getAvailableCourses } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import DashboardHeadingWrapper from "./Wrapper";

const AvailableCourses = () => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["availble-courses"],
    queryFn: getAvailableCourses,
  });

  return (
    <DashboardHeadingWrapper heading={"Available Courses"}>
      {isPending ? (
        <SkeletonCard />
      ) : isError ? (
        <div>There was an error while getting available courses</div>
      ) : (
        <>
          {data.courses.map((item, index) => (
            <Card
              key={index}
              href={`/videos-page/${item.course_id}`}
              title={item.title}
              desc={item.description}
              level={item.level}
              hours={item.hours}
              language={item.programming_language}
              teacher={item.teacher_name}
              badgeColor="bg-[#0000FF]"
              badgeText="New"
              blur="none"
            />
          ))}
        </>
      )}
    </DashboardHeadingWrapper>
  );
};

export default AvailableCourses;
