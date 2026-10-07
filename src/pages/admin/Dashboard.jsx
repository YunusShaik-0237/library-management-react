import WelcomeBanner from "../../components/dashboard/WelcomeBanner/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";
import LibraryStatistics from "../../components/dashboard/LibraryStatistics/LibraryStatistics";
import SystemStatus from "../../components/dashboard/SystemStatus/SystemStatus";
import StatsCards from "../../components/dashboard/StatsCards/StatsCards";
import ActivityChart from "../../components/dashboard/ActivityChart/ActivityChart";
import CalendarWidget from "../../components/dashboard/CalendarWidget/CalendarWidget";
import RecentBooks from "../../components/dashboard/RecentBooks/RecentBooks";
import UpcomingDueBooks from "../../components/dashboard/UpcomingDueBooks/UpcomingDueBooks";
import PopularBooks from "../../components/dashboard/PopularBooks/PopularBooks";
import RecentActivityTimeline from "../../components/dashboard/RecentActivityTimeline/RecentActivityTimeline";
import FineCollectionSummary from "../../components/dashboard/FineCollectionSummary/FineCollectionSummary";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <WelcomeBanner />

      <QuickActions />

      <LibraryStatistics />

      <SystemStatus />

      <StatsCards />

      {/* Row 1 */}
      <div className={styles.twoColumnGrid}>
        <ActivityChart />
        <CalendarWidget />
      </div>

      {/* Row 2 */}
      <div className={styles.twoColumnGrid}>
        <RecentBooks />
        <UpcomingDueBooks />
      </div>

      {/* Row 3 */}
      <div className={styles.twoColumnGrid}>
        <PopularBooks />
        <FineCollectionSummary />
      </div>

      {/* Full Width */}
      <RecentActivityTimeline />
    </div>
  );
};

export default Dashboard;