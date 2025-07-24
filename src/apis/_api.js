// utils/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3001/api",
  baseURL: "https://bookshow-j73m.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default instance;
