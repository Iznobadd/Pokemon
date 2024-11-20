import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { isValidToken } from "../utils/isValidToken";
import { jwtDecode } from "jwt-decode";
import { JwtToken } from "../types/auth.type";

type AuthContextData = {
  token: string | null;
  user: JwtToken | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
};

type Props = { children: ReactNode };

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<JwtToken | null>(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const isValid = await isValidToken(token);
          if (isValid && isMounted.current) {
            setToken(token);
            const decodedToken = jwtDecode<JwtToken>(token);
            if (decodedToken) {
              setUser(decodedToken);
            }
          } else {
            localStorage.removeItem("access_token");
            if (isMounted.current) setToken(null);
          }
        } catch (error) {
          console.error("Token validation failed:", error);
          localStorage.removeItem("access_token");
          if (isMounted.current) setToken(null);
        }
      } else {
        if (isMounted.current) setToken(null);
      }

      if (isMounted.current) setLoading(false);
    };

    checkToken();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const login = (token: string) => {
    localStorage.setItem("access_token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
