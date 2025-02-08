"use client";
import { useState } from "react";
import BorderButton from "../Button/borderButton";
import AuthInputField from "./inputfield";
import GoogleButton from "../Button/google";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [enroll, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p-9">
      <AuthInputField
        type={"text"}
        placeholder={"Enrollment"}
        value={enroll}
        onChange={(e) => setEnroll(e.target.value)}
      />
      <AuthInputField
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={"my-4"}
      />
      <BorderButton
        label={"Log in"}
        onClick={() => {}}
        parentClass={"w-full"}
        className="bg-[#0000FF] w-full"
      />
      <div className="my-2 text-center text-[15px] leading-[31px] tracking-[-1.01%]">
        or continue with
      </div>
      <GoogleButton onClick={() => {}} />
      <div className="my-2 text-center text-[15px] leading-[31px] tracking-[-1.01%]">
        Don&apos;t have an account?
      </div>
      <BorderButton
        label={"Create account"}
        onClick={() => router.push("/register")}
        parentClass={"w-full mb-2"}
        className="w-full bg-white text-black"
      />
      <BorderButton
        label={"Admin Log in"}
        onClick={() => router.push("/admin-login")}
        parentClass={"w-full mb-2"}
        className="bg-[#0F0E10] w-full text-[#6D6D6D]"
      />
    </div>
  );
};

export default LoginForm;
