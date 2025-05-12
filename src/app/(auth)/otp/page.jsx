import OTPForm from "@/components/Auth/otp";

const Page = () => {
  return (
    <>
      <div className="font-medium text-lg leading-[26px] tracking-[-0.01%] py-9 border-b border-[#FFFFFF1A] flex items-center justify-center">
        Verify OTP
      </div>
      <OTPForm />
    </>
  );
};

export default Page;
