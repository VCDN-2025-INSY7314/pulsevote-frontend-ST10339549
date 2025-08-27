import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import api from "../api/client";

function Core() {
  const [msg, setMsg] = useState("Loading protected data…");
  useEffect(() => {
    api.get("/api/protected")
      .then(r => setMsg(r.data.message))
      .catch(e => setMsg(e?.response?.data?.message || "Failed to load."));
  }, []);
  return <p>{msg}</p>;
}

export default function DashboardPage(){ return <Layout><Core/></Layout>; }
