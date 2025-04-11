import LogoSVG from "@/assets/Logo";
import SidebarLinks from "./links";
import StudentLogout from "./student-logout";
import TeacherLogout from "../Admin/teacher-logout";

const Sidebar = async ({ isAdmin = false }) => {
  return (
    <div className="w-[330px] p-9 flex justify-center fixed h-screen border-r border-r-[rgba(255,255,255,0.1)]">
      <div className="w-[258px] flex flex-col h-full">
        <div className="flex items-center gap-4 mb-[72px]">
          <LogoSVG />
          <div className="text-white block">Syncode</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <SidebarLinks isAdmin={isAdmin} />
          {isAdmin ? <TeacherLogout /> : <StudentLogout />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
