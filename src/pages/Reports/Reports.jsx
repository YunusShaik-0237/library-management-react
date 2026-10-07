import { useState } from "react";

import useReports from "../../hooks/useReports";

import ReportsToolbar from "../../components/reports/ReportsToolbar/ReportsToolbar";
import ReportsTable from "../../components/reports/ReportsTable/ReportsTable";
import ReportsPagination from "../../components/reports/ReportsPagination/ReportsPagination";

import ReportDetailsModal from "../../components/reports/ReportDetailsModal/ReportDetailsModal";

import styles from "./Reports.module.css";

const Reports = () => {
  const {
    reports,
    allReports,

    reportTypes,

    searchTerm,
    setSearchTerm,

    selectedType,
    setSelectedType,

    selectedDate,
    setSelectedDate,

    currentPage,
    totalPages,

    previousPage,
    nextPage,

    resetFilters,

    totalReports,
    totalRecords,
    generatedToday,
    completedReports,
  } = useReports();

  const [showDetailsModal, setShowDetailsModal] =
    useState(false);

  const [selectedReport, setSelectedReport] =
    useState(null);

  const handleView = (report) => {
    setSelectedReport(report);
    setShowDetailsModal(true);
  };

  return (
    <div className={styles.page}>
      {/* ================= Banner ================= */}

      <div className={styles.header}>
        <div>
          <h1>📊 Reports Dashboard</h1>

          <p>
            View library reports, statistics and
            transaction history.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h2>{totalReports}</h2>
            <span>Total Reports</span>
          </div>

          <div className={styles.statCard}>
            <h2>{totalRecords}</h2>
            <span>Total Records</span>
          </div>

          <div className={styles.statCard}>
            <h2>{generatedToday}</h2>
            <span>Generated Today</span>
          </div>

          <div className={styles.statCard}>
            <h2>{completedReports}</h2>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* ================= Toolbar ================= */}

      <div className={styles.card}>
        <ReportsToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          reportTypes={reportTypes}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onReset={resetFilters}
        />
      </div>

      {/* ================= Table ================= */}

      <div className={styles.card}>
        <ReportsTable
          reports={reports}
          onView={handleView}
        />
      </div>

      {/* ================= Pagination ================= */}

      <div className={styles.paginationWrapper}>
        <ReportsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          totalReports={allReports.length}
        />
      </div>

      {/* ================= Modal ================= */}

      <ReportDetailsModal
        isOpen={showDetailsModal}
        onClose={() =>
          setShowDetailsModal(false)
        }
        selectedReport={selectedReport}
      />
    </div>
  );
};

export default Reports;