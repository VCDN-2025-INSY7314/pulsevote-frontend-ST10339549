import { useState } from "react";
import api from "../api/client";
import { auth } from "../auth";
import { isValidEmail, isStrongPassword } from "../utils/validators";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError(""); setOk("");
    if (!email || !password) return setError("Email and password are required.");
    if (!isValidEmail(email)) return setError("Invalid email format.");
    if (!isStrongPassword(password)) {
      return setError("Password must be at least 8 characters and include letters and numbers.");
    }

    try {
      const { data } = await api.post("/api/auth/register", { email: email.trim(), password });
      auth.token = data.token;
      setOk("Registered successfully! Redirecting026");
      setTimeout(()=>location.assign("/dashboard"), 600);
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={submit} style={{maxWidth:360}}>
      <h3>Register</h3>
      {error && <p style={{color:"crimson"}}>{error}</p>}
      {ok && <p style={{color:"green"}}>{ok}</p>}
      <label>Email<br/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label><br/><br/>
      <label>Password<br/><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/></label><br/><br/>
      <button type="submit">Create account</button>
    </form>
  );
}
