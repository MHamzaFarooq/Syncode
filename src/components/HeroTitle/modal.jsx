"use client";

import { useEffect, useRef, useState } from "react";
import LoginForm from "../Authentication/Login";
import SignupForm from "../Authentication/Signup";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const [render, setRender] = useState("signup");
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsModalOpen]);

  return (
    <div
      className={`${
        isModalOpen
          ? "opacity-100  scale-100 pointer-events-auto bg-[rgba(0,0,0,0.6)]"
          : "opacity-0 scale-75 pointer-events-none"
      } fixed inset-0 flex justify-center items-center z-[100]
      transition-all duration-200 ease-linear`}
    >
      <div ref={boxRef} className="text-black flex justify-center items-center">
        {render === "signup" ? (
          <SignupForm setRender={setRender} />
        ) : (
          <LoginForm setRender={setRender} />
        )}
      </div>
    </div>
  );
};

export default Modal;
