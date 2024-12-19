import VideoPlaySVG from "@/assets/videoPlay";
import { videos } from "@/utils/videos";
import Link from "next/link";

const VideosPageContent = () => {
  return (
    <>
      <div className="my-9 font-medium">Content</div>
      <div className="flex flex-col gap-6">
        {videos.map((item, index) => (
          <Link
            href={`/video-player`}
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
      </div>
    </>
  );
};

export default VideosPageContent;
