import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";

Modal.setAppElement("#root");

const AuthModal = ({ isOpen, onRequestClose }) => {
  const { signup, error: serr } = useSignup();
  const { login, error: lerr } = useLogin();

  const [authType, setAuthType] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const goToAuth = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
    setAuthType((prev) => (prev === "login" ? "register" : "login"));
    // Reset errors when switching forms
    if (authType === "login") {
      serr = null;
    } else {
      lerr = null;
    }
  };

  useEffect(() => {
    if (lerr) {
      console.log("Login error:", lerr);
    }
  }, [lerr]);

  useEffect(() => {
    if (serr) {
      console.log("Signup error:", serr);
    }
  }, [serr]);

  useEffect(() => {
    if (authType === "register") {
      validateUsername();
    }
    validateEmail();
    validatePassword();
  }, [email, username, password]);

  const validateUsername = () => {
    let error = "";
    if (username.length < 5 || username.length > 20) {
      error = "Username must be between 5 and 20 characters";
    }
    setErrors((prev) => ({ ...prev, username: error }));
  };

  const validateEmail = () => {
    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error = "Invalid email format";
    }

    setErrors((prev) => ({ ...prev, email: error }));
  };

  const validatePassword = () => {
    let error = "";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      error =
        "Password must be at least 8 characters, including uppercase, lowercase, digit, and special character";
    }
    setErrors((prev) => ({ ...prev, password: error }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (errors.email || errors.password) {
      setLoading(false);
      return;
    }

    try {
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
    if (errors.email || errors.password || errors.username) {
      setLoading(false);
      return;
    }
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
      {authType === "login" && <h1>GameStash Login</h1>}
      {authType != "login" && <h1>GameStash Register</h1>}

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
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                }}
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword();
                }}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </label>
            {lerr && <div className="error">{lerr}</div>}
            <br />
            {!loading && <button type="submit">Login</button>}
            {loading && (
              <button class="buttonload">
                <i class="fa fa-spinner fa-spin"></i>
              </button>
            )}
            <p>
              Don't have an account?{" "}
              <button onClick={goToAuth}>Register</button>
            </p>
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
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateUsername();
                }}
                required
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                }}
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword();
                }}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </label>
            {serr && <div className="error">{serr}</div>}
            <br />
            {!loading && <button type="submit">Register</button>}
            {loading && (
              <button class="buttonload">
                <i class="fa fa-spinner fa-spin"></i>
              </button>
            )}
            <p>
              Already have an account? <button onClick={goToAuth}>Login</button>
            </p>
          </form>
        )}
      </div>

      <button className="close-button" onClick={onRequestClose}>
        X
      </button>
    </Modal>
  );
};

export default AuthModal;
