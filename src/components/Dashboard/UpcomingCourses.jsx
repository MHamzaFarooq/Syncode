"use client";
import { getUpcomingCourses } from "@/actions/actions";
import { card } from "@/utils/card";
import Card from "./Card";
import DashboardHeadingWrapper from "./Wrapper";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "./SkeletonCard";

const UpcomingCourses = () => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["upcoming-courses"],
    queryFn: getUpcomingCourses,
  });
  return (
    <DashboardHeadingWrapper heading={"Upcoming Courses"}>
      <div className="flex flex-wrap pb-[100px] gap-5">
        {isPending ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : isError ? (
          <div>There was an error while getting available courses</div>
        ) : (
          <>
            {data.courses.map((item, index) => (
              <Card
                key={index}
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
      </div>
    </DashboardHeadingWrapper>
  );
};

export default UpcomingCourses;
