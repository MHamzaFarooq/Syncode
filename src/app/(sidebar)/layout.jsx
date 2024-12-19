import Sidebar from "@/components/Sidebar";

export default function SidebarLayout({ children }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="w-[330px] p-9"></div>
        {children}
      </main>
    </>
  );
}
