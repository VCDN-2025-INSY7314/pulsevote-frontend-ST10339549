import { useEffect, useState } from "react";
import api from "../api/client";
import { useAuth } from "../auth/AuthProvider";

export default function Dashboard() {
  const [msg, setMsg] = useState("Loading...");
  const { logout } = useAuth();

  useEffect(() => {
    api.get("/api/protected")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Failed to load protected data"));
  }, []);

  return (
    <div style={{padding:"2rem", fontFamily:"system-ui"}}>
      <h2>Welcome to PulseVote</h2>
      <p>{msg}</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
