import Card from "@/components/Dashboard/Card";
import DashboardHero from "@/components/Dashboard/DashboardHero";
import { card } from "@/utils/card";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <DashboardHero />
        <Card
          href="/videos-page"
          heading="Available Courses"
          title="Learn C++ Fundamentals"
          desc="Unlock the power of C++ and take your coding skills to the next level! Master the building blocks of one of the most powerful programming languages. Ready to code like a pro? Let’s get started!"
          badgeColor="bg-[#0000FF]"
          badgeText="New"
          blur="none"
        />
        <div className="flex pb-[100px]">
          {card.map((item, index) => (
            <Card
              key={index}
              blur={item.blur}
              heading={item.heading}
              title={item.title}
              desc={item.desc}
              badgeColor={item.badgeColor}
              badgeText={item.badgeText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
