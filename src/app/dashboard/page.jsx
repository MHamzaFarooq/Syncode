import Card from "@/components/Dashboard/Card";
import DashboardHero from "@/components/Dashboard/DashboardHero";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { card } from "@/utils/card";
const Dashboard = () => {
  const cardElement = card.map((item, index) => {
    return (
      <>
        <Card
          key={index}
          blur={item.blur}
          heading={item.heading}
          title={item.title}
          desc={item.desc}
          badgeColor={item.badgeColor}
          badgeText={item.badgeText}
        />
      </>
    );
  });

  return (
    <main className="flex">
      <Sidebar />
      <div className="w-[330px] p-9"></div>
      <div className="flex flex-1 flex-col">
        <DashboardHero />
        <Card
          heading="Courses"
          title="Learn C++ Fundamentals"
          desc="Unlock the power of C++ and take your coding skills to the next level! Master the building blocks of one of the most powerful programming languages. Ready to code like a pro? Let’s get started!"
          badgeColor="0048FF"
          badgeText="New"
        />
        <div className="flex">{cardElement}</div>
      </div>
    </main>
  );
};

export default Dashboard;
