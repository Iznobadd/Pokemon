import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (error.response) {
      const errorMessage = error.response.data.message || "An error occurred";
      return Promise.reject({ ...error, message: errorMessage });
    }
    return Promise.reject(error);
  }
);

export default apiClient;
