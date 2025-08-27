import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../auth";

export default function ProtectedRoute({ children }) {
  const loc = useLocation();
  return auth.isAuthed()
    ? children
    : <Navigate to={`/login?m=Please%20log%20in&next=${encodeURIComponent(loc.pathname)}`} replace />;
}
