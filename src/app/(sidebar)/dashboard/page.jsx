import AvailableCourses from "@/components/Dashboard/AvailableCourses";
import DashboardHero from "@/components/Dashboard/DashboardHero";
import UpcomingCourses from "@/components/Dashboard/UpcomingCourses";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <DashboardHero />
        <AvailableCourses />
        <UpcomingCourses />
      </div>
    </>
  );
};

export default Dashboard;
