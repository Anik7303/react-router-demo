import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const Base = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default Base;
