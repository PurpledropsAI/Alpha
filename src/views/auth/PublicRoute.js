import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  const currentPath = window.location.pathname;

  // Redirect authenticated users away from login/signup pages and root path
  if (isAuthenticated && (currentPath === "/" || currentPath.match(/\/(login|signup)$/))) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default PublicRoute; 