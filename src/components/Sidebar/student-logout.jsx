"use client";

import { logout } from "@/actions/auth";
import { deleteUserSession } from "@/actions/setSession";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const StudentLogout = () => {
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log("Successfully logged out");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleLogout = async () => {
    await deleteUserSession();
    toast.success("Successfully Logged out");
    logoutMutation.mutate();
  };

  return (
    <button
      onClick={handleLogout}
      className="w-[85px] rounded-[12px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] p-4 bg-black hover:bg-[#0F0E10] cursor-pointer"
    >
      Logout
    </button>
  );
};

export default StudentLogout;
