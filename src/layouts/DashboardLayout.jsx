import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import Topbar from "../components/dashboard/Topbar/Topbar";

import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={styles.main}>
        <Topbar />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;