import VideoPlaySVG from "@/assets/videoPlay";
import Link from "next/link";

const AssignmentsPageContent = ({ assignments }) => {
  return (
    <>
      <div className="my-9 font-medium">Content</div>
      <div className="flex flex-col gap-6">
        {assignments.length !== 0 &&
          assignments.map((item, index) => (
            <Link
              href={`/assignment/${item.assignment_id}`}
              key={index}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="relative flex justify-center bg-black">
                <VideoPlaySVG />
                <div
                  className={`${
                    index !== assignments.length - 1 &&
                    item.watched &&
                    `absolute h-[39px] w-[1px] bg-white top-full -z-10`
                  }`}
                />
              </div>
              <div>{item.name}</div>
            </Link>
          ))}
        {assignments.length === 0 && <div>No assignments found.</div>}
      </div>
    </>
  );
};

export default AssignmentsPageContent;

export const SkeletonAssignmentsPageContentPageContent = () => {
  return (
    <>
      <div className="my-9 font-medium">Content</div>
      <div className="flex flex-col gap-6">
        {[...Array(4)].map((_, index) => (
          <Link
            href={`/video-player`}
            key={index}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="relative flex justify-center bg-black">
              <VideoPlaySVG />
            </div>
            <div className="bg-gray-500 animate-pulse rounded-full text-transparent">
              Understanding Arrays and Strings in C++
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
