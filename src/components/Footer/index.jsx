import Button from "@/assets/Button";
import Image from "next/image";
import React from "react";
import GridSVG from "@/assets/grid";

const Footer = () => {
  return (
    <>
      <div className="relative w-full pb-40 item flex justify-center overflow-hidden">
        <div className="max-w-[448px] flex flex-col items-center mt-[72px]">
          <div className=" text-[48px] md:text-[64px] font-medium text-center mb-[16px]">
            What are you waiting for?
          </div>
          <Button label={"Get Started Now"} />
        </div>
        <Image className="-z-10" src={"/blob.png"} alt="blog" fill />
        <GridSVG className="absolute -z-10 inset-0 w-full -top-3/4" />
      </div>
    </>
  );
};

export default Footer;
