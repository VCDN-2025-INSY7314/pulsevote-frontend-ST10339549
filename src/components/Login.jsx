import { useEffect, useState } from "react";
import api from "../api/client";
import { auth } from "../auth";
import { isValidEmail } from "../utils/validators";

export default function Login() {
  const params = new URLSearchParams(location.search);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(params.get("m") || "");
  const next = params.get("next") || "/";

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("Email and password are required.");
    if (!isValidEmail(email)) return setError("Invalid email format.");

    try {
      const { data } = await api.post("/api/auth/login", { email: email.trim(), password });
      auth.token = data.token;
      location.assign(next);
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  useEffect(()=>{ document.title="Login - PulseVote"; },[]);

  return (
    <form onSubmit={submit} style={{maxWidth:360}}>
      <h3>Login</h3>
      {error && <p style={{color:"crimson"}}>{error}</p>}
      <label>Email<br/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label><br/><br/>
      <label>Password<br/><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/></label><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
}
