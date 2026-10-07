import { useMemo, useState } from "react";
import issuesData from "../data/issuesData";

const ISSUES_PER_PAGE = 5;

const useIssues = () => {
  const [issues, setIssues] = useState(issuesData);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* ===========================
          Search & Filters
  =========================== */

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchesSearch =
        issue.bookTitle
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        issue.memberName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        issue.issueId
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        issue.memberId
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesBook =
        selectedBook === "All" ||
        issue.bookTitle === selectedBook;

      const matchesStatus =
        selectedStatus === "All" ||
        issue.status === selectedStatus;

      return (
        matchesSearch &&
        matchesBook &&
        matchesStatus
      );
    });
  }, [
    issues,
    searchTerm,
    selectedBook,
    selectedStatus,
  ]);

  /* ===========================
            Pagination
  =========================== */

  const totalPages = Math.ceil(
    filteredIssues.length / ISSUES_PER_PAGE
  );

  const paginatedIssues = useMemo(() => {
    const start =
      (currentPage - 1) * ISSUES_PER_PAGE;

    return filteredIssues.slice(
      start,
      start + ISSUES_PER_PAGE
    );
  }, [filteredIssues, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  /* ===========================
              CRUD
  =========================== */

  const addIssue = (newIssue) => {
    setIssues((prev) => [
      {
        ...newIssue,
        id: Date.now(),
      },
      ...prev,
    ]);
  };

  const updateIssue = (updatedIssue) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === updatedIssue.id
          ? updatedIssue
          : issue
      )
    );
  };

  const deleteIssue = (id) => {
    setIssues((prev) =>
      prev.filter((issue) => issue.id !== id)
    );
  };

  /* ===========================
          Return Book
  =========================== */

  const returnBook = (id, returnData) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? {
              ...issue,
              status: returnData.status,
              fine: returnData.fine,
              returnedDate:
                returnData.returnedDate,
            }
          : issue
      )
    );
  };

  /* ===========================
          Reset Filters
  =========================== */

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBook("All");
    setSelectedStatus("All");
    setCurrentPage(1);
  };

  /* ===========================
          Dropdown
  =========================== */

  const books = [
    "All",
    ...new Set(
      issues.map((issue) => issue.bookTitle)
    ),
  ];

  /* ===========================
            Statistics
  =========================== */

  const issuedCount = issues.filter(
    (i) => i.status === "Issued"
  ).length;

  const returnedCount = issues.filter(
    (i) => i.status === "Returned"
  ).length;

  const overdueCount = issues.filter(
    (i) => i.status === "Overdue"
  ).length;

  const totalFine = issues.reduce(
    (sum, issue) => sum + issue.fine,
    0
  );

  return {
    issues: paginatedIssues,
    allIssues: issues,

    books,

    searchTerm,
    setSearchTerm,

    selectedBook,
    setSelectedBook,

    selectedStatus,
    setSelectedStatus,

    currentPage,
    totalPages,

    nextPage,
    previousPage,

    addIssue,
    updateIssue,
    deleteIssue,
    returnBook,

    resetFilters,

    issuedCount,
    returnedCount,
    overdueCount,
    totalFine,
  };
};

export default useIssues;