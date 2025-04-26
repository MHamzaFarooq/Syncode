import CourseCard from "./card";

const CourseList = ({
  setCourseId,
  courses,
  setIsDialogOpen,
  setIsEditOpen,
  setVideos,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {courses.map((item, index) => (
        <CourseCard
          key={index}
          item={item}
          setCourseId={setCourseId}
          setIsDialogOpen={setIsDialogOpen}
          setIsEditOpen={setIsEditOpen}
          setVideos={setVideos}
        />
      ))}
    </div>
  );
};

export default CourseList;

export const SkeletonCourseList = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`flex flex-wrap items-center justify-between 
          p-9 
          border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] 
          rounded-[12px] bg-[#0F0E10]`}
        >
          <div className="font-medium text-lg text-transparent rounded-full animate-pulse bg-gray-500">
            Introduction to C++ Programming
          </div>
        </div>
      ))}
    </div>
  );
};

export const ErrorCourseList = ({ error }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>Something went wrong</div>
      <div>
        {error?.error || error?.message || "Error getting Courses and Videos"}
      </div>
    </div>
  );
};
