import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api/token", // Replace with your API's base URL
});

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        updateApiToken(null);
        console.error("Error in the AuthProvider:", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [getToken]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
