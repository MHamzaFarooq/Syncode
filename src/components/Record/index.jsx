"use client";
import { TeacherCoursesProvider } from "@/context/TeacherCourses";
import Screencast from "./screencast";

const Record = ({ teacher_id }) => {
  return (
    <TeacherCoursesProvider teacher_id={teacher_id}>
      <Screencast teacher_id={teacher_id} />
    </TeacherCoursesProvider>
  );
};

export default Record;
