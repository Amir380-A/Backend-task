import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; 

const PatientProfile = ({ token }) => {
  const history = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch all patients using the token
    const fetchPatients = async () => {
      try {
        const response = await api.getPatients(); 
        if (response.data && Array.isArray(response.data)) {
          setPatients(response.data);
        } else {
          console.error('Invalid response data for patients.');
        }
      } catch (error) {
        console.error('Fetching patients error:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleLogout = async () => {
    try {
      // Clear token and navigate to login
      await api.logout();
      history('/login'); // Use 'history' function to navigate
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            <a href={`/patients/${patient._id}`}>{patient.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientProfile;
