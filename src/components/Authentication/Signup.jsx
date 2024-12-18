import Button from "@/assets/Button";
import FormWrapper from "./FormWrapper";
import { useRouter } from "next/navigation";

const SignupForm = ({ setRender }) => {
  const router = useRouter();
  return (
    <FormWrapper>
      <input
        className="w-[402px] h-[58px] rounded-lg p-4 text-[14px] bg-[#0F0E10]"
        type="text"
        placeholder="Enrollment"
        name="enrollment"
      />
      <input
        className="w-[402px] h-[58px] rounded-lg p-4 text-[14px] bg-[#0F0E10]"
        type="email"
        placeholder="Email"
        name="email"
      />
      <input
        className="w-[402px] h-[58px] rounded-lg p-4 text-[14px] bg-[#0F0E10]"
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        className="w-[402px] h-[58px] rounded-lg p-4 text-[14px] bg-[#0F0E10]"
        type="password"
        placeholder="Confirm Password"
        name="confirmpassword"
      />
      <Button
        className="bg-[#0000FF] w-full text-white"
        parentClass="w-full"
        label="Sign up"
        onClick={() => router.push("/dashboard")}
      />
      <div className="w-full flex justify-center items-center">
        Already have an account?
      </div>
      <Button
        className="w-full bg-white text-black"
        parentClass="w-full"
        label="Log in"
        onClick={() => setRender("login")}
      />
    </FormWrapper>
  );
};

export default SignupForm;
