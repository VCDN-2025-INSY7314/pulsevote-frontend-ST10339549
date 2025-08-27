import { useState } from "react";
import api from "../api/client";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const auth = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const { data } = await api.post("/api/auth/login", { email, password });
      auth.login(data.token);     // store in memory
      nav("/");                   // go home (protected area)
    } catch (e) {
      setErr(e?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{maxWidth:360, margin:"4rem auto", fontFamily:"system-ui"}}>
      <h2>Log in</h2>
      <form onSubmit={submit}>
        <label>Email<br/>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
        </label><br/><br/>
        <label>Password<br/>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
        </label><br/><br/>
        <button type="submit">Log in</button>
      </form>
      {err && <p style={{color:"crimson"}}>{err}</p>}
    </div>
  );
}
