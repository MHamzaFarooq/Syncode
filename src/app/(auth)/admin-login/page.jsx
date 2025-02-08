import AdminLoginForm from "@/components/Auth/adminLogin";

const AdminLoginPage = () => {
  return (
    <>
      <div className="font-medium text-lg leading-[26px] tracking-[-0.01%] py-9 border-b border-[#FFFFFF1A] flex items-center justify-center">
        Admin login
      </div>
      <AdminLoginForm />
    </>
  );
};

export default AdminLoginPage;
