import { useEffect } from "react";
import { auth } from "../auth";
import Layout from "../components/Layout";

export default function LogoutPage(){
  useEffect(()=>{ auth.logout(); location.assign("/?m=Logged%20out"); },[]);
  return <Layout><p>Logging out…</p></Layout>;
}
