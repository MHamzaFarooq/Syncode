import Image from "next/image";
import Link from "next/link";
const HeroTitle = () => {
  return (
    <>
      <div className="relative mt-20 text-center flex flex-col items-center mb-9 z-1 sm:z-10">
        <h1 className="flex flex-col text-center text-5xl md:text-[82px] tracking-[-0.0506em] font-medium md:leading-[84px]">
          <span>The ultimate way of</span>
          <span className="pb-2 block bg-gradient-to-b from-white to-[#0630FF] bg-clip-text text-transparent">
            learning C++
          </span>
        </h1>
        <p className=" max-w-[500px] md:text-[20px] mt-4 mb-4">
          Elevate your C++ skills with super interactive videos in-video
          assignments and much much more!
        </p>
        <div className="bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl">
          <Link href={"/login"}>
            <button className="bg-white text-black px-[16px] py-[8px] rounded-lg text-[15px] font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="relative w-full aspect-[1118/501] hover:scale-105 transition-all duration-300">
          <Image
            src={"/hero-image.png"}
            alt="Hero Image"
            fill
            className="z-1"
          />
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
