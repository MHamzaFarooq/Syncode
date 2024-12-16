import Card from "@/components/Dashboard/Card";
import DashboardHero from "@/components/Dashboard/DashboardHero";
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
    <>
      <div className="w-[330px] p-9"></div>
      <div className="flex flex-1 flex-col">
        <DashboardHero />
        <Card
          heading="Available Courses"
          title="Learn C++ Fundamentals"
          desc="Unlock the power of C++ and take your coding skills to the next level! Master the building blocks of one of the most powerful programming languages. Ready to code like a pro? Let’s get started!"
          badgeColor="bg-[#0000FF]"
          badgeText="New"
          blur="none"
        />
        <div className="flex">{cardElement}</div>
      </div>
    </>
  );
};

export default Dashboard;
