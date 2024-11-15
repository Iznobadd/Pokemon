import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { JwtToken } from "../types/auth.type";

export const isValidToken = async (token: string): Promise<boolean> => {
  try {
    const decodedToken = jwtDecode<JwtToken>(token);
    const currentTime = Date.now() / 1000;

    const tokenValid = decodedToken.exp > currentTime;
    if (!tokenValid) {
      return false;
    }

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/verify`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
};
