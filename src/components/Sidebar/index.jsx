import AboutIcon from "@/assets/About";
import HomeBtn from "@/assets/HomeBtn";
import LogoSVG from "@/assets/Logo";
import NotificationIcon from "@/assets/NotificationIcon";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[330px] h-full p-9 flex justify-center border-r border-r-[rgba(255,255,255,0.1)]">
      <div className="w-[258px] h-full">
        <div className="flex items-center gap-4 mb-[72px]">
          <LogoSVG />
          <div className="text-white block">Syncode</div>
        </div>
        <div className="h-full flex flex-col">
          <div>
            <div className="flex items-center gap-4 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] p-4 rounded-[12px] bg-[#0F0E10] cursor-pointer">
              <HomeBtn />
              <div className="font-normal">Home</div>
            </div>
            <div className="flex items-center gap-4 border border-[rgba(255,255,255,0)] hover:border-[rgba(255,255,255,0.1)] p-4 rounded-[12px] cursor-pointer">
              <NotificationIcon />
              <div className="font-normal text-[#6D6D6D]">Notifications</div>
            </div>
            <div className="flex items-center gap-4 border border-[rgba(255,255,255,0)] hover:border-[rgba(255,255,255,0.1)] p-4 rounded-[12px] cursor-pointer">
              <AboutIcon />
              <div className="font-normal text-[#6D6D6D]">About Us</div>
            </div>
          </div>
          <div className="w-[85px] rounded-[12px] border border-[rgba(255,255,255,0.1)] p-4 bg-[#0F0E10] cursor-pointer">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
