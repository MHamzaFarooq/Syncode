import Button from "../../assets/Button";
import HeroImage from "@/public/hero-image.png";
import BackgroundImage from "@/public/background-element.png";
import Image from "next/image";

const HeroTitle = () => {
  return (
    <>
      <div className="relative mt-20 text-center flex flex-col items-center mb-9 z-10">
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
        <Button label="Get Started" />
      </div>

      <div className="flex justify-center relative">
        <div className="relative w-full aspect-[1118/501] hover:scale-105 transition-all duration-300">
          <Image
            src={"/hero-image.png"}
            alt="Hero Image"
            fill
            className="z-10"
          />
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
