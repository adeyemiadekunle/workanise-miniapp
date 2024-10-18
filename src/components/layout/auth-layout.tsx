import { fetchLocalUserData } from "@/lib/local-storage";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {

  const { accessToken } = fetchLocalUserData() || {}


  if (accessToken) return <Navigate to={`/`} replace />;
  return (
    <div className="h-full text-white">
      <Outlet />
    </div>
  );
};
