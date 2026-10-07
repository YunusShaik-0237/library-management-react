import { useMemo, useState } from "react";
import reportsData from "../data/reportsData";

const REPORTS_PER_PAGE = 5;

const useReports = () => {
  const [reports] = useState(reportsData);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedType, setSelectedType] =
    useState("All");

  const [selectedDate, setSelectedDate] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ==========================
          Filters
  ========================== */

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.reportId
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        report.reportName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        report.generatedBy
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === "All" ||
        report.reportType === selectedType;

      const matchesDate =
        selectedDate === "" ||
        report.generatedDate === selectedDate;

      return (
        matchesSearch &&
        matchesType &&
        matchesDate
      );
    });
  }, [
    reports,
    searchTerm,
    selectedType,
    selectedDate,
  ]);

  /* ==========================
        Pagination
  ========================== */

  const totalPages = Math.ceil(
    filteredReports.length /
      REPORTS_PER_PAGE
  );

  const paginatedReports = useMemo(() => {
    const start =
      (currentPage - 1) *
      REPORTS_PER_PAGE;

    return filteredReports.slice(
      start,
      start + REPORTS_PER_PAGE
    );
  }, [filteredReports, currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  /* ==========================
        Reset
  ========================== */

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setSelectedDate("");
    setCurrentPage(1);
  };

  /* ==========================
        Report Types
  ========================== */

  const reportTypes = [
    "All",
    ...new Set(
      reports.map(
        (report) => report.reportType
      )
    ),
  ];

  /* ==========================
        Statistics
  ========================== */

  const totalReports = reports.length;

  const totalRecords = reports.reduce(
    (sum, report) =>
      sum + report.totalRecords,
    0
  );

  const generatedToday = reports.filter(
    (report) =>
      report.generatedDate ===
      "2026-07-16"
  ).length;

  const completedReports = reports.filter(
    (report) =>
      report.status === "Completed"
  ).length;

  return {
    reports: paginatedReports,

    allReports: reports,

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
  };
};

export default useReports;