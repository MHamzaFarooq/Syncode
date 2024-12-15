import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="my-[160px]">
      <p className=" flex justify-center mt-[160px] mb-[72px] w-full text-[32px]">
        <span className="max-w-[553px] text-center leading-[38px]">
          Harness the power of Syncode, making learning interactive and
          effective for all skill levels.
        </span>
      </p>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-[10px] max-w-[1118px] w-full">
          <div className="max-w-[346px] h-[400px] w-full md:w-[346px] justify-between flex flex-col items-center bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[10px]">
            <div className="mt-[10px] mx-[56px] relative w-[234px] h-[234px]">
              <Image src={"/cone.png"} fill />
            </div>
            <div className="mx-10 mb-10 w-[225px]">
              <span className="text-base font-medium">
                Super Interactive Videos
              </span>
              <p className="mt-1 text-base font-normal text-[rgba(225,225,225,0.7)]">
                A fully functional compiler built into the videos
              </p>
            </div>
          </div>
          <div className="bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[10px] h-[400px] max-w-[346px] w-full flex-none md:flex-1 md:w-auto md:max-w-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
