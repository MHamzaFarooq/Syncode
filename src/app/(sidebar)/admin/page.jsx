"use client";
import Card from "@/components/Admin/Card";
import FeedbackModal from "@/components/FeedbackModal";
import Image from "next/image";
import React, { useState } from "react";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [render, setRender] = useState("feedback");
  return (
    <>
      <FeedbackModal
        render={render}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="flex flex-1 flex-col">
        <div className="h-[261px] w-full relative overflow-hidden border-b border-b-[rgba(255,255,255,0.1)]">
          <div className="font-semibold text-7xl p-9 h-full flex flex-col justify-center">
            <div>Welcome back,</div>
            <div className="bg-gradient-to-b from-white to-[#0630FF] bg-clip-text text-transparent">
              Teacher
            </div>
          </div>
          <Image
            className="-z-10"
            src={"/dashboard-grid2.png"}
            alt="dashboard-grid"
            fill
          />
        </div>
        <Card setRender={setRender} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default Admin;
