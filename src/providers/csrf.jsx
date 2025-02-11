"use client";

import { setCSRFTokenInSession } from "@/actions/setSession";
import { axiosInstance } from "@/utils/axios";
import { useEffect } from "react";

const CSRFTokenProvider = ({ children }) => {
  const getCSRFToken = async () => {
    try {
      const response = await axiosInstance.get("/csrftoken/get-csrftoken/");
      const csrftoken = response.headers["x-csrftoken"];
      if (csrftoken) {
        await setCSRFTokenInSession(csrftoken);
      }
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  useEffect(() => {
    getCSRFToken();
  }, []);

  return children;
};

export default CSRFTokenProvider;
