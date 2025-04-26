import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const getAvailableCourses = async () => {
  try {
    const response = await axiosInstance.get("/course/get-available/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Error getting Available coureses")
      );
    }
    throw error;
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/course/get-course-by-id?course_id=${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Error getting course by id");
    }
    throw error;
  }
};

export const getUpcomingCourses = async () => {
  try {
    const response = await axiosInstance.get("/course/get-upcoming/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Error getting Upcoming coureses")
      );
    }
    throw error;
  }
};

export const getTeacherCourses = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/course/get-teacher-courses?teacher_id=${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Error getting Teacher coureses");
    }
    throw error;
  }
};

export const getTeacherCoursesAndVids = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/course/get-teacher-courses-and-vids?teacher_id=${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data ||
        new Error("Error getting Teacher courses and vids")
      );
    }
    throw error;
  }
};

export const uploadVideo = async (course_id, name, events, audioBlob) => {
  console.log("course_id: ", course_id);
  console.log("name: ", name);
  console.log("events: ", JSON.stringify(events));
  console.log("audio: ", audioBlob);

  if (course_id === "" || name === "") {
    const error = new Error("Course ID and Name cannot be empty");
    error.custom = true;
    throw error;
  }

  if (Array.isArray(events) && events.length === 0) {
    const error = new Error("You have not recorded any events");
    error.custom = true;
    throw error;
  }
  try {
    const formData = new FormData();
    formData.append("course_id", course_id);
    formData.append("name", name);
    formData.append("events", JSON.stringify(events));
    formData.append("audio", audioBlob);
    const response = await axiosInstance.post(
      `/video/create-video/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to create a video");
    }
    throw error;
  }
};

export const getVideo = async (video_id) => {
  try {
    const response = await axiosInstance.get(
      `/video/get-video?video_id=${video_id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Error getting Video");
    }
    throw error;
  }
};

export const addCourse = async (
  teacher_id,
  title,
  description,
  programming_language,
  level,
  status
) => {
  try {
    const response = await axiosInstance.post(`/course/create-course/`, {
      teacher_id,
      title,
      description,
      programming_language,
      level,
      status,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Add Course");
    }
    throw error;
  }
};

export const deleteCourse = async (course_id) => {
  try {
    const response = await axiosInstance.post(`/course/delete-course`, {
      course_id,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Delete Course");
    }
    throw error;
  }
};

export const deleteVideo = async (video_id) => {
  try {
    const response = await axiosInstance.post(`/video/delete-video/`, {
      video_id,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Delete Video");
    }
    throw error;
  }
};

export const addAssignment = async (name, code, course_id) => {
  try {
    const response = await axiosInstance.post(`/assignment/add-assignment/`, {
      name,
      code,
      course_id,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Add Assignment");
    }
    throw error;
  }
};

export const getAssignment = async (assignment_id) => {
  try {
    const response = await axiosInstance.get(
      `/assignment/get-assignment?assignment_id=${assignment_id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Error getting Assignment");
    }
    throw error;
  }
};

export const getCourseAssignments = async (course_id) => {
  try {
    const response = await axiosInstance.get(
      `/assignment/get-assignments-by-course?course_id=${course_id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Error getting Course's Assignment")
      );
    }
    throw error;
  }
};
