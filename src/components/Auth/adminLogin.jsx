"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BorderButton from "../Button/borderButton";
import AuthInputField from "./inputfield";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setTeacherDataInSession } from "@/actions/setSession";
import { adminLogin } from "@/actions/auth";

const AdminLoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("erum");
  const [password, setPassword] = useState("bruhmius");

  const adminLoginMutation = useMutation({
    mutationFn: () => adminLogin(username, password),
    onSuccess: async (data) => {
      toast.success("Login Successful");
      await setTeacherDataInSession(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Admin Login Failed");
    },
  });

  return (
    <div className="p-9">
      <AuthInputField
        type={"text"}
        placeholder={"Username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        onClick={() => adminLoginMutation.mutate()}
        isLoading={adminLoginMutation.isPending}
        parentClass={"w-full mb-2"}
        className="bg-[#0000FF] w-full"
      />
      <BorderButton
        label={"Back to login page"}
        onClick={() => router.push("/login")}
        parentClass={"w-full mb-2"}
        className="bg-[#0F0E10] w-full text-[#6D6D6D]"
      />
    </div>
  );
};

export default AdminLoginForm;
