"use client";

import BackSVG from "@/assets/Videoplayer/back";
import LogoSVG from "@/assets/Videoplayer/logo";
import { useRouter } from "next/navigation";

const VideoPlayerHeader = () => {
  const router = useRouter();
  return (
    <header className="w-full flex items-center mb-3">
      <button onClick={() => router.back()}>
        <BackSVG />
      </button>
      <div className="ml-9 flex items-center gap-3 text-[#FFFFFF26]">
        <LogoSVG />
        <span>/</span>
        <span>Introduction to C++ Programming</span>
        <span>/</span>
        <div className="text-xs p-2 rounded-xl border border-[#FFFFFF26] text-white">
          0:01/2:25
        </div>
      </div>
    </header>
  );
};

export default VideoPlayerHeader;
