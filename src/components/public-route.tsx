import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface PublicRouteProps {
  onlyPublic?: boolean;
}


const PublicRoute = ({ onlyPublic = false }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (onlyPublic && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
