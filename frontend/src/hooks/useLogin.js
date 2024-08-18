import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import apiClient from "../services/apiClient";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState();
  const [loading, setIsLoading] = useState(false);
  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await apiClient.post("/api/user/login", {
        email,
        password
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
  return { login, error, loading };
}
