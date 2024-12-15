import { skillGrid } from "@/utils/skillsGrid";
import React from "react";

const Skills = () => {
  const elements = skillGrid.map((items, index) => {
    return (
      <div key={index} className="w-[259px] h-[93px]">
        <div className="flex items-center">
          <div className="mr-[5px]">{items.logo}</div>
          <div className="text-[16px] font-medium">{items.heading}</div>
        </div>
        <p className="text-[16px] mt-[10px] text-[rgba(255,255,255,0.7)]">
          {items.desc}
        </p>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full my-[160px] items-center">
      <div className="mb-[72px] text-center text-[48px] md:text-[64px] font-medium max-w-[740px] leading-[72px]">
        Elevate your <br /> skills with syncode
      </div>
      <div className="place-items-center grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {elements}
      </div>
    </div>
  );
};

export default Skills;
