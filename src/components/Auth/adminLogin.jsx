"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BorderButton from "../Button/borderButton";
import AuthInputField from "./inputfield";

const AdminLoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        onClick={() => {}}
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
