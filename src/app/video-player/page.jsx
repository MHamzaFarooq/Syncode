import CodingSpace from "@/components/VideoPlayer/codingSpace";
import VideoPlayerHeader from "@/components/VideoPlayer/header";
import VideoPlayerInput from "@/components/VideoPlayer/input";
import VideoPlayerOutput from "@/components/VideoPlayer/output";

const VideoPlayerPage = () => {
  return (
    <main className="px-2 pt-9 min-h-screen flex flex-col">
      <VideoPlayerHeader />
      <div className="flex-1 flex gap-2">
        <CodingSpace />
        <div className="flex-1 flex flex-col gap-2">
          <VideoPlayerInput />
          <VideoPlayerOutput />
        </div>
      </div>
    </main>
  );
};

export default VideoPlayerPage;
