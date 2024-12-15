import { techStack } from "@/utils/TechStack";
import React from "react";

const TechStack = () => {
  const elements = techStack.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-transparent border border-[rgba(255,255,255,0.15)] md:max-w-[235px] w-full rounded-[10px] py-8 px-10 flex items-center justify-center cursor-pointer hover:scale-105 duration-300"
      >
        <div className="mr-[10px]">{<item.logo className="w-9 h-9" />}</div>
        <span className="hidden md:block text-lg font-semibold">
          {item.name}
        </span>
      </div>
    );
  });

  return (
    <section className="bg-black text-white mt-[72px] mb-[160px] flex items-center justify-center">
      <div className="max-w-[900px] text-center">
        <h2 className="text-gray-400 text-sm mb-[72px]">
          Built with the top-notch technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
          {elements}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
