import Sidebar from "@/components/Sidebar";
import React from "react";

const Sidebarayout = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-[330px] p-9"></div>
      {children}
    </main>
  );
};

export default Sidebarayout;
