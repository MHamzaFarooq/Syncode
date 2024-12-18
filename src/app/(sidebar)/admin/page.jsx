import Card from "@/components/Admin/Card";
import Image from "next/image";
import React from "react";
// import { Button } from "@/components/ui/button"

const Admin = () => {
  return (
    <>
      <div className="w-[330px] p-9"></div>
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
        <Card />
      </div>
    </>
  );
};

export default Admin;
