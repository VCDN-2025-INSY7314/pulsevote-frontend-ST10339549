export const auth = {
  get token() { return localStorage.getItem("pv_token"); },
  set token(val) {
    if (!val) localStorage.removeItem("pv_token");
    else localStorage.setItem("pv_token", val);
  },
  isAuthed() { return !!localStorage.getItem("pv_token"); },
  logout() { localStorage.removeItem("pv_token"); }
};
