"use client";
import { sidebarMenu } from "@/utils/sidebarMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SidebarLinks = () => {
  const pathName = usePathname();
  return (
    <div>
      {sidebarMenu.map((item, index) => {
        return (
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
                color={`${pathName === item.href ? "white" : "#6D6D6D"}`}
              />
            }
            <div
              className={`${
                pathName === item.href ? "text-white" : " text-[#6D6D6D]"
              } font-normal`}
            >
              {item.iconLabel}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
