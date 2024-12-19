import HeaderPut from "./headerput";

const VideoPlayerInput = () => {
  return (
    <div className="border border-[#FFFFFF26] min-h-[209px] max-h-[209px] rounded-xl overflow-hidden">
      <HeaderPut heading={"Input"} />
      <textarea
        className="w-full h-full p-4 bg-transparent focus:outline-none"
        placeholder="Input (Optional)"
      />
    </div>
  );
};

export default VideoPlayerInput;
