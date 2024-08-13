import { createContext, useContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("GameStashUser"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("GameStashUser", JSON.stringify(userData));
    dispatch({ type: "LOGIN", payload: userData });
  };

  const logout = () => {
    localStorage.removeItem("GameStashUser");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
