"use client";
import { setStudentDataInSession } from "@/actions/setSession";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import BorderButton from "../Button/borderButton";
import { resendOTP, verifyOTP } from "@/actions/auth";

const OTPForm = () => {
  const searchParams = useSearchParams();

  const flow = searchParams.get("flow");
  const email = searchParams.get("email");

  const router = useRouter();
  const [value, setValue] = useState("");
  const otpMutation = useMutation({
    mutationFn: () => verifyOTP(email, value, flow),
    onSuccess: async (data) => {
      toast.success("Verify OTP Successful");
      await setStudentDataInSession(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Verify OTP Failed");
    },
  });

  const handleRegister = () => {
    otpMutation.mutate();
  };

  const resendMutation = useMutation({
    mutationFn: () => resendOTP(email),
    onSuccess: async (data) => {
      toast.success("Resend OTP Successful");
      // await setStudentDataInSession(data);
    },
    onError: (error) => {
      toast.error(error?.error || "Resend OTP Failed");
    },
  });

  return (
    <div className="p-9">
      <div className="justify-center flex my-9">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <BorderButton
        label={"Verify OTP"}
        onClick={handleRegister}
        isLoading={otpMutation.isPending}
        parentClass={"w-full"}
        className="bg-[#0000FF] w-full"
      />
      <BorderButton
        label={"Resend OTP"}
        onClick={() => resendMutation.mutate()}
        isLoading={resendMutation.isPending}
        parentClass={"w-full mb-2"}
        loaderColor="#000"
        className="w-full bg-white text-black"
      />
    </div>
  );
};

export default OTPForm;
