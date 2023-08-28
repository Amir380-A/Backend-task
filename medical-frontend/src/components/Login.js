import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
const Login = ({ onLogin }) => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.login(username, password);
      console.log("Login response:", response);

      if (response.token) {
        // Access the 'token' directly from the response
        const { token } = response;
        onLogin(token);
        history.replace("/patients"); // Redirect to patients' list
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
