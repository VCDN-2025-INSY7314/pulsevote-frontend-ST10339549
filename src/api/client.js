import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000",
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const t = localStorage.getItem("pv_token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const code = err?.response?.status;
    if (code === 401 || code === 403) {
      const url = new URL(window.location.href);
      if (url.pathname !== "/login") {
        window.location.assign("/login?m=Please%20log%20in");
      }
    }
    return Promise.reject(err);
  }
);

export default api;
