import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api.register(username, email, password);
      console.log("Registration response:", response);

      if (response.token) {
        // Access the 'token' directly from the response
        const { token } = response;
        onLogin(token);
        navigate("/dashboard");
      } else {
        console.error("Registration failed. No token found in response.");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
