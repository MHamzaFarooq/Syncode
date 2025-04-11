"use client";
import { login } from "@/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import BorderButton from "../Button/borderButton";
import GoogleButton from "../Button/google";
import AuthInputField from "./inputfield";
import { setStudentDataInSession } from "@/actions/setSession";
import { useCSRF } from "@/providers/csrf";

const LoginForm = () => {
  const { tokenLoaded, isLoading } = useCSRF();
  const router = useRouter();
  const [email, setEmail] = useState("bruh@gmail.com");
  const [password, setPassword] = useState("bruhmius");

  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: async (data) => {
      toast.success("Login Successful");
      await setStudentDataInSession(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Login Failed");
    },
  });

  const handleLogin = () => {
    loginMutation.mutate();
  };

  return (
    <div className="p-9">
      <AuthInputField
        type={"text"}
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInputField
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={"my-4"}
      />
      <BorderButton
        onClick={handleLogin}
        isLoading={loginMutation.isPending}
        label={"Log in"}
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
