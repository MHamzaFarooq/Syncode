"use client";
import { useState } from "react";
import BorderButton from "../Button/borderButton";
import AuthInputField from "./inputfield";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [enroll, setEnroll] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="p-9">
      <AuthInputField
        type={"text"}
        placeholder={"Enrollment"}
        value={enroll}
        onChange={(e) => setEnroll(e.target.value)}
      />
      <AuthInputField
        type={"text"}
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={"mt-4"}
      />
      <AuthInputField
        type={"text"}
        placeholder={"Display name"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={"mt-4"}
      />
      <AuthInputField
        type={"password"}
        placeholder={"Set password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={"mt-4"}
      />
      <AuthInputField
        type={"password"}
        placeholder={"Confirm password"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={"my-4"}
      />
      <BorderButton
        label={"Create account"}
        onClick={() => {}}
        parentClass={"w-full"}
        className="bg-[#0000FF] w-full"
      />
      <div className="my-2 text-center text-[15px] leading-[31px] tracking-[-1.01%]">
        Already have an account?
      </div>
      <BorderButton
        label={"Log in"}
        onClick={() => router.push("/login")}
        parentClass={"w-full mb-2"}
        className="w-full bg-white text-black"
      />
    </div>
  );
};

export default RegisterForm;
