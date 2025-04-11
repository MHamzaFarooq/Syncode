import VideoPlaySVG from "@/assets/videoPlay";
import Link from "next/link";

const VideosPageContent = ({ videos }) => {
  return (
    <>
      <div className="my-9 font-medium">Content</div>
      <div className="flex flex-col gap-6">
        {videos.length !== 0 &&
          videos.map((item, index) => (
            <Link
              href={`/video-player/${item.video_id}`}
              key={index}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="relative flex justify-center bg-black">
                <VideoPlaySVG />
                <div
                  className={`${
                    index !== videos.length - 1 &&
                    item.watched &&
                    `absolute h-[39px] w-[1px] bg-white top-full -z-10`
                  }`}
                />
              </div>
              <div>{item.name}</div>
            </Link>
          ))}
        {videos.length === 0 && <div>No videos found.</div>}
      </div>
    </>
  );
};

export default VideosPageContent;

export const SkeletonVideosPageContent = () => {
  return (
    <>
      <div className="my-9 font-medium">Content</div>
      <div className="flex flex-col gap-6">
        {[...Array(10)].map((_, index) => (
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
