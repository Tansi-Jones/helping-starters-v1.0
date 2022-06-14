import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUID } from "../features/auth/authSlice";

const ProtectedRoutes = () => {
  const location = useLocation();
  const userID = useSelector(selectCurrentUID);

  return userID ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
