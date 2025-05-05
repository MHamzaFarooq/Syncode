import { getSession } from "@/actions/ironSession";
import Submissions from "@/components/Admin/submissions";
import DashboardHero from "@/components/Dashboard/DashboardHero";

const Admin = async () => {
  const session = await getSession();
  return (
    <>
      <DashboardHero name={session.teacher_name || "Teacher"} />
      <Submissions teacher_id={session.teacher_id} />
    </>
  );
};

export default Admin;
