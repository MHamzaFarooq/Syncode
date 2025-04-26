import { getSession } from "@/actions/ironSession";
import Courses from "@/components/Courses";
import DashboardHero from "@/components/Dashboard/DashboardHero";

const CoursesPage = async () => {
  const session = await getSession();
  return (
    <>
      <DashboardHero name={session.teacher_name || "Teacher"} />
      <Courses id={session.teacher_id} />
    </>
  );
};

export default CoursesPage;
