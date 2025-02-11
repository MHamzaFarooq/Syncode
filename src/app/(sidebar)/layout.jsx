import { getSession } from "@/actions/ironSession";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";

export default async function SidebarLayout({ children }) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-[330px] p-9"></div>
      {children}
    </main>
  );
}
