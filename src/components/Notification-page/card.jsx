import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="mt-4 w-full h-full cursor-pointer">
        <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
          <div className="flex items-center justify-between">
            <h1 className="flex-1 text-[14px] font-normal">
              {props.assignment}
            </h1>
            <h1 className="flex-1 text-[14px] font-normal">
              {props.assignmentNo}
            </h1>

            <div
              className={`py-[4px] px-[8px] ${props.badgeColor} rounded-full text-[12px] font-normal`}
            >
              {props.badgeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
