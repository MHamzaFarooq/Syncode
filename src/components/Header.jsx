"use client";
import LogoSVG from "@/assets/Logo";
import Link from "next/link";

const Header = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className="z-10 fixed flex items-center w-full gap-4 bg-black p-6 sm:p-9 cursor-pointer transition-all sm:bg-transparent"
    >
      <LogoSVG />
      <div className="text-white">Syncode</div>
    </div>
  );
};
export default Header;
