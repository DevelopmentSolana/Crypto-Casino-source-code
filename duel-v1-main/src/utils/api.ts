import axios from "axios";

// Create an instance of axios
// @deprecated use services/api
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
