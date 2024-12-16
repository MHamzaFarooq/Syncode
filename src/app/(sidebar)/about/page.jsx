import Card from "@/components/AboutUs/card";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-[330px]"></div>
      <div className="flex flex-1 flex-col p-9">
        <h1 className="text-[32px] font-medium h-[48px] mb-4">About Us</h1>
        <div className="flex flex-1 flex-col gap-9">
          <Card />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
