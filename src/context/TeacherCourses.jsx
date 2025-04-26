"use client";
import { getTeacherCourses } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

// Create context
const TeacherCoursesContext = createContext();

// Custom hook to use the context
export const useTeacherCourses = () => {
  const context = useContext(TeacherCoursesContext);
  if (!context) {
    throw new Error(
      "useTeacherCourses must be used within a TeacherCoursesProvider"
    );
  }
  return context;
};

// Context Provider component
export const TeacherCoursesProvider = ({ teacher_id, children }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["teacherCourses", teacher_id],
    queryFn: () => getTeacherCourses(teacher_id),
  });

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    data,
    isLoading,
    isError,
    error,
    title,
    setTitle,
    courseId,
    setCourseId,
    isOpen,
    setIsOpen,
  };

  return (
    <TeacherCoursesContext.Provider value={value}>
      {children}
    </TeacherCoursesContext.Provider>
  );
};
