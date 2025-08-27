import { Link } from "react-router-dom";
import { auth } from "../auth";

export default function Layout({ children }) {
  const loggedIn = auth.isAuthed();
  return (
    <div style={{fontFamily:"system-ui", maxWidth:900, margin:"0 auto", padding:"1rem"}}>
      <header style={{display:"flex", gap:"1rem", alignItems:"center"}}>
        <h2 style={{marginRight:"auto"}}>PulseVote</h2>
        <nav style={{display:"flex", gap:"1rem"}}>
          <Link to="/">Home</Link>
          {loggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </header>
      <main style={{marginTop:"1rem"}}>{children}</main>
    </div>
  );
}
