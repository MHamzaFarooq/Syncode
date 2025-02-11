import { axiosInstance } from "@/utils/axios";
import axios from "axios";
import { getCSRFTokenInSession } from "./ironSession";

export const login = async (email, password) => {
  const csrftoken = await getCSRFTokenInSession();
  try {
    const response = await axiosInstance.post(
      `/student/login-student/`,
      {
        email,
        password,
      },
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Login failed");
    }
    throw error;
  }
};

export const adminLogin = async (username, password) => {
  const csrftoken = await getCSRFTokenInSession();
  try {
    const response = await axiosInstance.post(
      "/teacher/login-teacher/",
      { username, password },
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Admin Login failed");
    }
    throw error;
  }
};

export const register = async (
  enroll,
  email,
  username,
  password,
  confirmPassword
) => {
  if (password !== confirmPassword) {
    throw new Error("Password and Confirm Password not same");
  }
  const csrftoken = await getCSRFTokenInSession();
  try {
    const response = await axiosInstance.post(
      "/student/create-student/",
      { enroll, email, username, password },
      { headers: { "X-CSRFToken": csrftoken } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Registration failed");
    }
    throw error;
  }
};

export const logout = async () => {
  const csrftoken = await getCSRFTokenInSession();
  try {
    const response = await axiosInstance.post(
      "/student/logout-student/",
      {},
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Logout failed");
    }
    throw error;
  }
};

export const adminLogout = async () => {
  const csrftoken = await getCSRFTokenInSession();
  try {
    const response = await axiosInstance.post(
      "/teacher/logout-teacher/",
      {},
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Logout failed");
    }
    throw error;
  }
};
