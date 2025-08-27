import { createContext, useContext, useMemo, useState } from "react";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null); // memory only

  const value = useMemo(() => ({
    token,
    isAuthed: !!token,
    login: (t) => setToken(t),
    logout: () => setToken(null),
  }), [token]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
