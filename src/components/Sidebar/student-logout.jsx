"use client";

import { logout } from "@/actions/auth";
import { deleteUserSession } from "@/actions/setSession";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const StudentLogout = () => {
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: async (data) => {
      toast.success("Successfully Logged out");
      console.log(data);
      await deleteUserSession();
    },
    onError: (error) => {
      toast.error("Failed Logging out");
      console.error(error);
    },
  });

  return (
    <button
      onClick={() => logoutMutation.mutate()}
      className="w-[85px] rounded-[12px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] p-4 bg-black hover:bg-[#0F0E10] cursor-pointer"
    >
      Logout
    </button>
  );
};

export default StudentLogout;
