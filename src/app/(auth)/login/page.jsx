import LoginForm from "@/components/Auth/login";

const LoginPage = () => {
  return (
    <>
      <div className="font-medium text-lg leading-[26px] tracking-[-0.01%] py-9 border-b border-[#FFFFFF1A] flex items-center justify-center">
        Log in or Sign up
      </div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
