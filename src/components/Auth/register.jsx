"use client";
import { useState } from "react";
import BorderButton from "../Button/borderButton";
import AuthInputField from "./inputfield";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/actions/auth";
import { setStudentDataInSession } from "@/actions/setSession";
import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();
  const [enroll, setEnroll] = useState("01-134212-102");
  const [email, setEmail] = useState("herosoccer@gmail.com");
  const [username, setUsername] = useState("ali");
  const [password, setPassword] = useState("bruh");
  const [confirmPassword, setConfirmPassword] = useState("bruh");

  const registerMutation = useMutation({
    mutationFn: () =>
      register(enroll, email, username, password, confirmPassword),
    onSuccess: async (data) => {
      toast.success("Registration Successful");
      await setStudentDataInSession(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Registration Failed");
    },
  });

  const handleRegister = () => {
    registerMutation.mutate();
  };

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
        onClick={handleRegister}
        isLoading={registerMutation.isPending}
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
