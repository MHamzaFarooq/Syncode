const VideosPageHeading = ({ course }) => {
  const { title, description: desc, level, hours } = course;
  return (
    <>
      <h1 className="font-medium text-[32px]">{title}</h1>
      <div className="mt-4 bg-[#0F0E10] border border-[rgba(255,255,255,0.1)] rounded-xl p-9">
        <div className="text-[#6D6D6D]">{desc}</div>
        <div className="flex items-center text-xs gap-[21px] mt-8">
          <div>
            <span>Est. duration: </span>
            <span className="text-[#6D6D6D]">{hours}</span>
          </div>
          <div>
            <span>Level: </span>
            <span className="text-[#6D6D6D]">{level}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosPageHeading;

export const SkeletonVideosPageHeading = () => {
  return (
    <>
      <h1 className="max-w-fit text-transparent bg-gray-500 animate-pulse rounded-full font-medium text-[32px]">
        Learn C++ Fundamentals
      </h1>
      <div className="mt-4 bg-[#0F0E10] border border-[rgba(255,255,255,0.1)] rounded-xl p-9">
        <div className="text-[#6D6D6D] flex flex-col gap-1 ">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="text-transparent bg-gray-500 animate-pulse rounded-full"
            >
              Bruh
            </div>
          ))}
        </div>
        <div className="flex items-center text-xs gap-[21px] mt-8">
          <div>
            <span>Est. duration: </span>
            <span className="text-transparent bg-gray-500 animate-pulse rounded-full">
              2.5 hours
            </span>
          </div>
          <div>
            <span>Level: </span>
            <span className="text-transparent bg-gray-500 animate-pulse rounded-full">
              Beginner
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
