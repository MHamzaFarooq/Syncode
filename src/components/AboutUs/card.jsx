import React from "react";
import about from "@/utils/about";

const Card = () => {
  const questions = about.map((item, index) => {
    return (
      <>
        <div key={index} className="w-full h-full cursor-pointer">
          <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
            <div className="flex flex-col justify-between">
              <h1 className="flex-1 text-[16px] font-normal">
                {item.question}
              </h1>
              <h1 className="flex-1 mt-4 text-[14px] text-[#6D6D6D] font-normal">
                {item.answer}
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{questions}</>;
};

export default Card;
