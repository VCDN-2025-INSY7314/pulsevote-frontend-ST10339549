import { useEffect, useState } from "react";
import api from "../api/client";
import { auth } from "../auth";

export default function Login() {
  const params = new URLSearchParams(location.search);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(params.get("m") || "");
  const next = params.get("next") || "/";

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    const body = { email: email.trim(), password };
    if (!/^\S+@\S+\.\S+$/.test(body.email)) return setMsg("Please enter a valid email.");
    if (body.password.length < 8) return setMsg("Password must be at least 8 chars.");

    try {
      const { data } = await api.post("/api/auth/login", body);
      auth.token = data.token;
      location.assign(next);
    } catch (err) {
      setMsg(err?.response?.data?.message || "Login failed");
    }
  };

  useEffect(()=>{ document.title="Login - PulseVote"; },[]);

  return (
    <form onSubmit={submit} style={{maxWidth:360}}>
      <h3>Login</h3>
      {msg && <p style={{color:"crimson"}}>{msg}</p>}
      <label>Email<br/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label><br/><br/>
      <label>Password<br/><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/></label><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
}
