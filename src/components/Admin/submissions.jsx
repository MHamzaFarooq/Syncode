"use client";
import { useState } from "react";
import FeedbackModal from "../FeedbackModal";
import Card from "./Card";

const Submissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [render, setRender] = useState("feedback");
  return (
    <>
      <FeedbackModal
        render={render}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Card setRender={setRender} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Submissions;
