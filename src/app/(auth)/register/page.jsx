import RegisterForm from "@/components/Auth/register";

const RegisterPage = () => {
  return (
    <>
      <div className="font-medium text-lg leading-[26px] tracking-[-0.01%] py-9 border-b border-[#FFFFFF1A] flex items-center justify-center">
        Create an account
      </div>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
