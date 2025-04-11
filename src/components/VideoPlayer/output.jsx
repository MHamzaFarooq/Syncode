import HeaderPut from "./headerput";

const VideoPlayerOutput = ({ output }) => {
  return (
    <div className="flex-1 border border-[#FFFFFF26] rounded-xl overflow-hidden">
      <HeaderPut heading={"Output"} />
      <pre className="font-inconsolata p-4 whitespace-pre-wrap break-words overflow-auto">
        {output}
      </pre>
    </div>
  );
};

export default VideoPlayerOutput;
