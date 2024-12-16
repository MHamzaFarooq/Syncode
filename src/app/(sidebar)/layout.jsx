import Sidebar from "@/components/Sidebar";

export default function SidebarLayout({ children }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  );
}
