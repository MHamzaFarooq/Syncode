import { getSession } from "@/actions/ironSession";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const session = await getSession();
  if (!session.isAdminLoggedIn) {
    redirect("/admin-login");
  }
  return (
    <main className="flex">
      <Sidebar isAdmin={true} />
      <div className="w-[330px] p-9"></div>
      <div className="flex flex-col flex-1">{children}</div>
    </main>
  );
}
