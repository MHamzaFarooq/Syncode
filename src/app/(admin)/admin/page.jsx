import { getSession } from "@/actions/ironSession";
import Submissions from "@/components/Admin/submissions";
import TeacherLogout from "@/components/Admin/teacher-logout";
import Image from "next/image";

const Admin = async () => {
  const session = await getSession();
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[261px] w-full relative overflow-hidden border-b border-b-[rgba(255,255,255,0.1)]">
        <div className="font-semibold text-7xl p-9 h-full flex flex-col justify-center">
          <div>Welcome back,</div>
          <div className="bg-gradient-to-b from-white to-[#0630FF] bg-clip-text text-transparent">
            {session.teacher_name || "Teacher"}
          </div>
        </div>
        <Image
          className="-z-10"
          src={"/dashboard-grid2.png"}
          alt="dashboard-grid"
          fill
        />
      </div>
      <Submissions />
      <div className="p-9">
        <TeacherLogout />
      </div>
    </div>
  );
};

export default Admin;
