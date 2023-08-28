import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // Your API utility functions

const Dashboard = ({ token }) => {
  const history = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patients using the token
    const fetchPatients = async () => {
      try {
        const response = await api.getPatients(token);
        console.log("Patients response:", response.data);
        if (response.data && Array.isArray(response.data)) {
          setPatients(response.data);
          console.log("Patients array:", patients);
        } else {
          console.error("Invalid response data for patients.");
        }
      } catch (error) {
        console.error("Fetching patients error:", error);
      }
    };

    fetchPatients();
  }, [token]);

  const handleLogout = async () => {
    try {
      // Clear token and navigate to login
      await api.logout();
      history("/login"); // Use 'history' function to navigate
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
