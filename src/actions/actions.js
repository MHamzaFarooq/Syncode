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
