"use server";

import { getSession } from "./ironSession";

export const setCSRFTokenInSession = async (csrftoken) => {
  const session = await getSession();
  session.csrftoken = csrftoken;
  await session.save();
  console.log(session);
};

export const setStudentDataInSession = async (data) => {
  const session = await getSession();
  session.email = data.email;
  session.student_id = data.student_id;
  session.enroll = data.enroll;
  session.username = data.username;
  session.isLoggedIn = true;
  await session.save();
};

export const setTeacherDataInSession = async (data) => {
  const session = await getSession();
  session.teacher_id = data.teacher_id;
  session.teacher_name = data.name;
  session.teacher_username = data.username;
  session.isAdminLoggedIn = true;
  await session.save();
};

export const deleteSession = async () => {
  const session = await getSession();
  session.destroy();
};

export const deleteUserSession = async () => {
  const session = await getSession();
  session.email = null;
  session.student_id = null;
  session.enroll = null;
  session.username = null;
  session.isLoggedIn = false;
  await session.save();
};

export const deleteTeacherSession = async () => {
  const session = await getSession();
  session.teacher_id = null;
  session.teacher_name = null;
  session.teacher_username = null;
  session.isAdminLoggedIn = false;
  await session.save();
};
