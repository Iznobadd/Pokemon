import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const errorMessage = error.response.data.message || "An error occurred";
      return Promise.reject({ ...error, message: errorMessage });
    }
    return Promise.reject(error);
  }
);

export default apiClient;
