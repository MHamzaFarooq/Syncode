import VideoPlayer from "@/components/VideoPlayer";

const VideoPlayerPage = async ({ params }) => {
  const { id } = await params;
  return <VideoPlayer id={id} />;
};

export default VideoPlayerPage;
