const VideosPageHeading = () => {
  return (
    <>
      <h1 className="font-medium text-[32px]">Learn C++ Fundamentals</h1>
      <div className="mt-4 bg-[#0F0E10] border border-[rgba(255,255,255,0.1)] rounded-xl p-9">
        <div className="text-[#6D6D6D]">
          The ultimate C++ Fundamentals - the perfect starting point for any C++
          beginner. Learn the basics of C++ by solving 140+ interactive coding
          challenges and building eight fun projects.
        </div>
        <div className="flex items-center text-xs gap-[21px] mt-8">
          <div>
            <span>Est. duration: </span>
            <span className="text-[#6D6D6D]">2.5 hours</span>
          </div>
          <div>
            <span>Level: </span>
            <span className="text-[#6D6D6D]">Beginner</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosPageHeading;
