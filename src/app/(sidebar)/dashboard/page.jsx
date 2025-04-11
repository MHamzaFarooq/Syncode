import { getSession } from "@/actions/ironSession";
import AvailableCourses from "@/components/Dashboard/AvailableCourses";
import DashboardHero from "@/components/Dashboard/DashboardHero";
import UpcomingCourses from "@/components/Dashboard/UpcomingCourses";
const Dashboard = async () => {
  const session = await getSession();
  return (
    <>
      <div className="flex flex-1 flex-col">
        <DashboardHero name={session.username || "Student"} />
        <AvailableCourses />
        <UpcomingCourses />
      </div>
    </>
  );
};

export default Dashboard;
