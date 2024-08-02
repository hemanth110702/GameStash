import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("GameStashUser");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};