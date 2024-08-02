import React, { useState } from "react";
import Modal from "react-modal";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";

Modal.setAppElement("#root");

const AuthModal = ({ isOpen, onRequestClose }) => {
  const { signup, error: serr, isLoading: sil } = useSignup();
  const { login, error: lerr, isLoading: lil } = useLogin();

  const [authType, setAuthType] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("im here");
      await login(email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(username, email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <div onClick={() => setAuthType("login")}>Login</div>
        <div onClick={() => setAuthType("register")}>Register</div>
      </div>

      <div className="authFC">
        {authType == "login" && (
          <form onSubmit={handleLogin} className="lform">
            <p>Enter your login details:</p>
            <label>
              Email:
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        )}

        {authType == "register" && (
          <form onSubmit={handleRegister} className="sform">
            Create your account :
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
        )}
      </div>

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AuthModal;
