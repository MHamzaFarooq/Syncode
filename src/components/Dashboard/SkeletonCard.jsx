const SkeletonCard = (props) => {
  return (
    <div className={`mt-4 w-full cursor-pointer`}>
      <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-medium bg-gray-500 animate-pulse text-transparent rounded-full">
            Learn C++ Fundamentals
          </h1>
          <div className="bg-gray-500 animate-pulse text-transparent py-[5px] px-[10px] rounded-full text-[10px] font-bold">
            New
          </div>
        </div>
        <div className="bg-gray-500 animate-pulse h-5 rounded-full mt-[16px] text-[16px] font-normal max-w-[966px] text-[#6D6D6D]" />
        <div className="bg-gray-500 animate-pulse h-5 rounded-full mt-[16px] text-[16px] font-normal max-w-[966px] text-[#6D6D6D]" />
        <div className="mt-9 flex items-center justify-between">
          <div className="flex gap-6">
            <p className="text-[12px] bg-gray-500 animate-pulse text-transparent rounded-full">
              C++
            </p>
            <p className="text-[12px] bg-gray-500 animate-pulse text-transparent rounded-full">
              3.4 Hours
            </p>
            <p className="text-[12px] bg-gray-500 animate-pulse text-transparent rounded-full">
              Beginner Level
            </p>
          </div>
          <div className="text-[12px] bg-gray-500 animate-pulse text-transparent rounded-full">
            Dr. Erum Ashraf
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
