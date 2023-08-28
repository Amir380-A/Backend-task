import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PatientProfile from "./components/PatientProfile";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <Router>
        <Navbar token={token} handleLogout={handleLogout} />

        <Routes>
          <Route
            path="/login"
            element={
              token ? (
                <Navigate to="/patients" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              token ? (
                <Navigate to="/patients" />
              ) : (
                <Register onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/patients/:id"
            element={
              token ? (
                <PatientProfile token={token} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/patients"
            element={
              token ? <Dashboard token={token} /> : <Navigate to="/patients" />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
