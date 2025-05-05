import { getSession } from "@/actions/ironSession";
import { redirect } from "next/navigation";

export default async function SidebarLayout({ children }) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }
  return <>{children}</>;
}
