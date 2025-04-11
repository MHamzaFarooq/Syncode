"use client";
import { getCourseById } from "@/actions/actions";
import VideosPageContent, {
  SkeletonVideosPageContent,
} from "@/components/VideosPage/content";
import VideosPageHeading, {
  SkeletonVideosPageHeading,
} from "@/components/VideosPage/heading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const VideosPageId = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourseById(id),
  });

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col p-9">
        <SkeletonVideosPageHeading />
        <SkeletonVideosPageContent />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col min-h-screen flex-1 items-center justify-center p-9">
        <p className="text-red-500 text-2xl">
          {error?.error || "Something went wrong while fetching the course."}
        </p>
        <Link
          href={"/dashboard"}
          className="hover:text-[#0000FF] underline text-base duration-300 transition-all"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const { course } = data;
  const videos = course.videos;
  return (
    <div className="flex flex-1 flex-col p-9">
      <VideosPageHeading course={course} />
      <VideosPageContent videos={videos} />
    </div>
  );
};

export default VideosPageId;
