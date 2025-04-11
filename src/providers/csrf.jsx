"use client";

import { setCSRFTokenInSession } from "@/actions/setSession";
import { axiosInstance } from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context to track CSRF token status
export const CSRFContext = createContext({
  tokenLoaded: false,
  isLoading: true,
});

const CSRFTokenProvider = ({ children }) => {
  const [tokenState, setTokenState] = useState({
    tokenLoaded: false,
    isLoading: true,
  });

  const getCSRFToken = async () => {
    try {
      setTokenState({ tokenLoaded: false, isLoading: true });
      const response = await axiosInstance.get("/csrftoken/get-csrftoken/");
      const csrftoken = response.headers["x-csrftoken"];
      if (csrftoken) {
        await setCSRFTokenInSession(csrftoken);
        setTokenState({ tokenLoaded: true, isLoading: false });
      }
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      setTokenState({ tokenLoaded: false, isLoading: false });
    }
  };

  useEffect(() => {
    getCSRFToken();
  }, []);

  return (
    <CSRFContext.Provider value={tokenState}>{children}</CSRFContext.Provider>
  );
};

export default CSRFTokenProvider;

// Create a hook for components to use
export const useCSRF = () => useContext(CSRFContext);
