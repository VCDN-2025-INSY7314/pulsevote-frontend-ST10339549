import { Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth();
  return isAuthed ? children : <Navigate to="/login" replace />;
}
