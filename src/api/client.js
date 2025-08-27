import axios from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// BASE URL of your API (HTTPS dev)
const api = axios.create({
  baseURL: "https://localhost:5000",
  withCredentials: false, // set true only if you later use cookies
});

// tiny pluggable token holder (we'll set this in App)
let getToken = () => null;
export const bindTokenGetter = (fn) => { getToken = fn; };

// request: attach Bearer token
api.interceptors.request.use((config) => {
  const t = getToken?.();
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

// response: redirect to /login on 401/403
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const code = err?.response?.status;
    if (code === 401 || code === 403) history.push("/login");
    return Promise.reject(err);
  }
);

export default api;
