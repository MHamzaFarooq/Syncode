"use client";
import React, { useState } from "react";
import ModalWrapper from "../Modal/wrapper";
import CodeBlock from "../CodeBlock";
import BorderButton from "../Button/borderButton";

const Card = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { assignment_name: name, code, feedback } = item;
  return (
    <>
      <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} title={"Feedback"}>
        <div className="w-full mb-4">
          <CodeBlock code={code} />
        </div>
        <div className="mt-4 w-full">
          <div className="p-4 bg-[#0F0E10] rounded-xl">
            <div className="text-xs leading-[18px]">{feedback}</div>
          </div>
          <div className="mt-4 w-full">
            <BorderButton
              className="w-full bg-white text-black"
              parentClass="w-full"
              label={"Back"}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </ModalWrapper>
      <div onClick={() => setIsOpen(true)}>
        <div className="mt-4 w-full h-full cursor-pointer">
          <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
            <div className="flex items-center justify-between">
              <h1 className="flex-1 text-[14px] font-normal">
                Assignment: {index}
              </h1>
              <h1 className="flex-1 text-[14px] font-normal">{name}</h1>
              <div
                className={`py-[4px] px-[8px] bg-[#0000FF] rounded-full text-[12px] font-normal`}
              >
                Marked
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

export const CardSkeleton = () => {
  return (
    <div>
      <div className="mt-4 w-full h-full cursor-pointer">
        <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
          <div className="flex items-center justify-between">
            <h1 className="flex-1 text-[14px] font-normal ">
              <span className="text-transparent bg-gray-200 rounded-full animate-pulse">
                Printing Hello World
              </span>
            </h1>
            <h1 className="flex-1 text-[14px] font-normal ">
              <span className="text-transparent bg-gray-200 rounded-full animate-pulse">
                1
              </span>
            </h1>
            <div
              className={`py-[4px] px-[8px] text-[12px] font-normal text-transparent bg-gray-200 rounded-full animate-pulse`}
            >
              Marked
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
