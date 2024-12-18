import Button from "@/assets/Button";
import FormWrapper from "./FormWrapper";
import { useRouter } from "next/navigation";

const LoginForm = ({ setRender }) => {
  const router = useRouter();
  return (
    <FormWrapper>
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
      <Button
        className="bg-[#0000FF] w-full text-white"
        parentClass="w-full"
        label="Log in"
        onClick={() => router.push("/dashboard")}
      />
      <div className="w-full flex justify-center items-center">
        Don&apos;t have an account?
      </div>
      <Button
        className="w-full bg-white text-black"
        parentClass="w-full"
        label="Sign up"
        onClick={() => setRender("signup")}
      />
      <div className="w-full flex justify-center items-center">or</div>
      <Button
        className="w-full bg-[#0F0E10] text-[#6D6D6D]"
        parentClass="w-full"
        label="Admin Log in"
        onClick={() => router.push("/admin")}
      />
    </FormWrapper>
  );
};

export default LoginForm;
