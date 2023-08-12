import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your backend URL

const api = axios.create({
  baseURL,
});

// Interceptor to add the authorization header to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Helper function for handling response errors
const handleResponseError = (error) => {
  if (error.response) {
   
    return Promise.reject(error.response.data);
  } else if (error.request) {
    
    return Promise.reject({ message: 'No response from server' });
  } else {
    
    return Promise.reject({ message: 'Request setup error' });
  }
};

const apiService = {
  // Authentication
  login: async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },

  register: async (username, password) => {
    try {
      const response = await api.post('/auth/register', { username, password });
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },

  // Patients
  getPatients: async () => {
    try {
      const response = await api.get('/patients');
      console.log('Patients response:', response.data); // Add this line
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },
  

  getPatientById: async (id) => {
    try {
      const response = await api.get(`/patients/${id}`);
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },

  createPatient: async (patientData) => {
    try {
      const response = await api.post('/patients', patientData);
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },

  updatePatient: async (id, updatedData) => {
    try {
      const response = await api.put(`/patients/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },

  deletePatient: async (id) => {
    try {
      const response = await api.delete(`/patients/${id}`);
      return response.data;
    } catch (error) {
      return handleResponseError(error);
    }
  },
};



export default apiService;
