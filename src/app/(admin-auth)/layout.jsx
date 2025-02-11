import { getSession } from "@/actions/ironSession";
import CSRFTokenProvider from "@/providers/csrf";
import { redirect } from "next/navigation";

const AdminAuthLayout = async ({ children }) => {
  const session = await getSession();
  if (session.isAdminLoggedIn) {
    redirect("/admin");
  }
  return (
    <CSRFTokenProvider>
      <main className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute -z-10 left-1/2 -translate-x-1/2 -top-1/2 
            max-w-[898px] w-full aspect-[898/733] bg-[#0000FF7D]
            rounded-full blur-3xl"
        />
        <div className="rounded-2xl bg-black border border-[#2929CF1A] max-w-[474px] w-full shadow-[0px_-19px_70px_#2929CF66,0px_-20px_70px_#2929CF40]">
          {children}
        </div>
      </main>
    </CSRFTokenProvider>
  );
};

export default AdminAuthLayout;
