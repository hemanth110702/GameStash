import { useState } from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "../context/AuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);

  const signup = async (username, email, password) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post("api/user/signup", {
        username,
        email,
        password,
      });
      const data = response.data;
      localStorage.setItem("GameStashUser", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };
  return { signup, error, loading };
};
