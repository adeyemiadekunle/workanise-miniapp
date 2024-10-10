import { fetchLocalUserData } from "@/lib/local-storage";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchLocalUserData();
      setAccessToken(data?.accessToken || null);
    };
    getUserData();
  }, []);

  if (accessToken) return <Navigate to={`/`} replace />;
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};
