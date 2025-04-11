"use client";
import { getVideo } from "@/actions/actions";
import VideoPlayerHeader from "@/components/VideoPlayer/header";
import { useQuery } from "@tanstack/react-query";
import LoadedPlayer from "./LoadedPlayer";

const VideoPlayer = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["video", id],
    queryFn: () => getVideo(id),
  });
  return (
    <main className="px-2 pt-9 min-h-screen flex flex-col">
      <VideoPlayerHeader isLoading={isLoading} name={data?.video?.name} />
      {isLoading ? (
        <div>Loading Video... </div>
      ) : isError ? (
        <div>
          <p>Something went wrong</p>
          <p className="text-red-500">
            Error: {error?.error || "Video not found"}
          </p>
        </div>
      ) : (
        <LoadedPlayer
          eventsState={data?.video?.events}
          audioURL={data?.video?.audio_url}
        />
      )}
    </main>
  );
};

export default VideoPlayer;
