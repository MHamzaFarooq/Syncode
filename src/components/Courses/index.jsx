"use client";
import {
  deleteCourse,
  deleteVideo,
  getTeacherCoursesAndVids,
} from "@/actions/actions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BorderButton from "../Button/borderButton";
import DialogBox from "../Dialog";
import CourseList, { ErrorCourseList, SkeletonCourseList } from "./list";
import AddCoursesModal from "./modal";
import EditModal from "./edit-modal";

const Courses = ({ id }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogVidOpen, setIsDialogVidOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isFetching, refetch, isError, error } = useQuery({
    queryKey: ["courses-and-vids", id],
    queryFn: () => getTeacherCoursesAndVids(id),
    refetchOnWindowFocus: false,
  });
  const [courseId, setCourseId] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [videos, setVideos] = useState([]);
  const deleteCourseMutation = useMutation({
    mutationFn: () => deleteCourse(courseId),
    onSuccess: async () => {
      setCourseId(null);
      await refetch();
      toast.success("Course deleted successfully");
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to delete course");
    },
  });

  const deleteVideoMutation = useMutation({
    mutationFn: () => deleteVideo(videoId),
    onSuccess: async () => {
      setVideoId(null);
      await refetch();
      toast.success("Video deleted successfully");
      setIsEditOpen(false);
      setIsDialogVidOpen(false);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to delete video");
    },
  });

  useEffect(() => {
    console.log(videoId);
  }, [videoId]);

  return (
    <>
      <EditModal
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        videos={videos}
        setVideoId={setVideoId}
        setIsDialogVidOpen={setIsDialogVidOpen}
      />
      <AddCoursesModal
        isFetching={isFetching}
        refetch={refetch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        teacher_id={id}
      />
      <div
        className={`mt-[72px] p-9 pt-0 
        flex items-center justify-between`}
      >
        <h1 className="font-medium text-[32px]">Your courses</h1>
        <BorderButton
          label={"Add more"}
          onClick={() => setIsOpen(true)}
          disabled={false}
          isLoading={false}
        />
      </div>
      <div className="px-9 pb-9">
        {isLoading ? (
          <SkeletonCourseList />
        ) : isError ? (
          <ErrorCourseList error={error} />
        ) : (
          <CourseList
            setCourseId={setCourseId}
            courses={data?.courses}
            setIsDialogOpen={setIsDialogOpen}
            setIsEditOpen={setIsEditOpen}
            setVideos={setVideos}
          />
        )}
      </div>
      <DialogBox
        title={"Are you sure you want to delete this course?"}
        desc={
          "Deleting this course will remove all its content and associated records permanently. Please confirm to proceed."
        }
        isLoading={deleteCourseMutation.isPending || isFetching}
        disabled={
          courseId === null || deleteCourseMutation.isPending || isFetching
        }
        onClick={() => deleteCourseMutation.mutate()}
        onClose={() => setCourseId(null)}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
      <DialogBox
        title={"Are you sure you want to delete this video?"}
        desc={
          "This action will permanently remove the video from your library. This cannot be undone."
        }
        isLoading={deleteVideoMutation.isPending || isFetching}
        disabled={
          videoId === null || deleteVideoMutation.isPending || isFetching
        }
        onClick={() => deleteVideoMutation.mutate()}
        onClose={() => setVideoId(null)}
        isOpen={isDialogVidOpen}
        setIsOpen={setIsDialogVidOpen}
      />
    </>
  );
};

export default Courses;
