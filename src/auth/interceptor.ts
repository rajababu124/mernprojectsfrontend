import axios from 'axios';

// Create an Axios instance
const interceptor = axios.create({
  // baseURL: 'http://localhost:5000/api', // replace with your actual API base URL
  baseURL: `https://mernproject-sudp.onrender.com/api`, // replace with your actual API base URL
});

// Add a request interceptor
interceptor.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or any other secure storage
    const token = localStorage.getItem('token');

    // If token is available, attach it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default interceptor;
