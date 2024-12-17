"use client";
import AboutIcon from "@/assets/About";
import HomeBtn from "@/assets/HomeBtn";
import LogoSVG from "@/assets/Logo";
import NotificationIcon from "@/assets/NotificationIcon";
import { sidebarMenu } from "@/utils/sidebarMenu";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="w-[330px] p-9 flex justify-center fixed h-screen border-r border-r-[rgba(255,255,255,0.1)]">
      <div className="w-[258px] flex flex-col h-full">
        <div className="flex items-center gap-4 mb-[72px]">
          <LogoSVG />
          <div className="text-white block">Syncode</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {sidebarMenu.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.href}
                    className={`${
                      pathName === item.href
                        ? "bg-[#0F0E10] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)]"
                        : ""
                    } flex items-center gap-4 border border-[rgba(255,255,255,0)] hover:border-[rgba(255,255,255,0.1)] p-4 rounded-[12px] cursor-pointer`}
                  >
                    {
                      <item.icon
                        color={`${
                          pathName === item.href ? "white" : "#6D6D6D"
                        }`}
                      />
                    }
                    <div
                      className={`${
                        pathName === item.href
                          ? "text-white"
                          : " text-[#6D6D6D]"
                      } font-normal`}
                    >
                      {item.iconLabel}
                    </div>
                  </Link>
                </>
              );
            })}
          </div>

          <Link
            href={"/"}
            className="w-[85px] rounded-[12px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] p-4 bg-black hover:bg-[#0F0E10] cursor-pointer"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
