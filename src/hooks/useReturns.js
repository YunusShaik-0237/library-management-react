import { useMemo, useState } from "react";
import returnsData from "../data/returnsData";

const RETURNS_PER_PAGE = 5;

const useReturns = () => {
  const [returns, setReturns] = useState(returnsData);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedBook, setSelectedBook] =
    useState("All");

  const [selectedMember, setSelectedMember] =
    useState("All");

  const [selectedFine, setSelectedFine] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ======================================
          Search & Filters
  ====================================== */

  const filteredReturns = useMemo(() => {
    return returns.filter((item) => {
      const matchesSearch =
        item.bookTitle
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.memberName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.returnId
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.issueId
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesBook =
        selectedBook === "All" ||
        item.bookTitle === selectedBook;

      const matchesMember =
        selectedMember === "All" ||
        item.memberName === selectedMember;

      const matchesFine =
        selectedFine === "All" ||
        (selectedFine === "With Fine"
          ? item.fine > 0
          : item.fine === 0);

      return (
        matchesSearch &&
        matchesBook &&
        matchesMember &&
        matchesFine
      );
    });
  }, [
    returns,
    searchTerm,
    selectedBook,
    selectedMember,
    selectedFine,
  ]);

  /* ======================================
            Pagination
  ====================================== */

  const totalPages = Math.ceil(
    filteredReturns.length / RETURNS_PER_PAGE
  );

  const paginatedReturns = useMemo(() => {
    const start =
      (currentPage - 1) * RETURNS_PER_PAGE;

    return filteredReturns.slice(
      start,
      start + RETURNS_PER_PAGE
    );
  }, [filteredReturns, currentPage]);

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

  /* ======================================
              CRUD
  ====================================== */

  const updateReturn = (updatedReturn) => {
    setReturns((prev) =>
      prev.map((item) =>
        item.id === updatedReturn.id
          ? updatedReturn
          : item
      )
    );
  };

  const deleteReturn = (id) => {
    setReturns((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* ======================================
            Reset Filters
  ====================================== */

  const resetFilters = () => {
    setSearchTerm("");

    setSelectedBook("All");

    setSelectedMember("All");

    setSelectedFine("All");

    setCurrentPage(1);
  };

  /* ======================================
            Dropdown Data
  ====================================== */

  const books = [
    "All",
    ...new Set(
      returns.map((item) => item.bookTitle)
    ),
  ];

  const members = [
    "All",
    ...new Set(
      returns.map((item) => item.memberName)
    ),
  ];

  /* ======================================
              Statistics
  ====================================== */

  const returnedToday = returns.filter(
    (item) =>
      item.returnDate === "2026-07-28"
  ).length;

  const totalReturned = returns.length;

  const totalFineCollected =
    returns.reduce(
      (sum, item) => sum + item.fine,
      0
    );

  const fineCollectedCount =
    returns.filter((item) => item.fine > 0)
      .length;

  return {
    returns: paginatedReturns,

    allReturns: returns,

    books,

    members,

    searchTerm,
    setSearchTerm,

    selectedBook,
    setSelectedBook,

    selectedMember,
    setSelectedMember,

    selectedFine,
    setSelectedFine,

    currentPage,
    totalPages,

    nextPage,
    previousPage,

    updateReturn,
    deleteReturn,

    resetFilters,

    returnedToday,

    totalReturned,

    totalFineCollected,

    fineCollectedCount,
  };
};

export default useReturns;