import Button from "@/assets/Button";
import Image from "next/image";
import React from "react";
import GridSVG from "@/assets/grid";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="relative w-full pb-40 item flex justify-center overflow-hidden">
        <div className="max-w-[448px] flex flex-col items-center mt-[72px]">
          <div className=" text-[48px] md:text-[64px] font-medium text-center mb-[16px]">
            What are you waiting for?
          </div>
          <div className="bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl">
            <Link
              href={"/dashboard"}
              className="bg-white text-black px-[15px] py-[5px] rounded-lg text-[15px] font-medium"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        <Image className="-z-10" src={"/blob.png"} alt="blog" fill />
        <GridSVG className="absolute -z-10 inset-0 w-full -top-3/4" />
      </div>
    </>
  );
};

export default Footer;
