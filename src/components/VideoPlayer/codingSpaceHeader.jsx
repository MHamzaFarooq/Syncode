import RunCodeSVG from "@/assets/Videoplayer/runcode";

const CodingSpaceHeader = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full flex">
        <div className="flex-1"></div>
        <div className="flex-1 flex items-center justify-center font-medium text-[#FFFFFF40]">
          Coding Space
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="p-2 border border-[#FFFFFF1A] hover:border-white transition-all duration-150 ease-linear rounded-lg">
            <div className="flex items-center text-xs gap-2 bg-[#0000FF] px-[15px] py-[5px] rounded-lg">
              <span>Run CODE</span>
              <RunCodeSVG />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingSpaceHeader;
