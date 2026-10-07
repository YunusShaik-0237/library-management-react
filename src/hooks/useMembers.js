import { useMemo, useState } from "react";

import membersData from "../data/membersData";

const MEMBERS_PER_PAGE = 5;

const useMembers = () => {
  /* ==========================================
      Members State
  ========================================== */

  const [members, setMembers] = useState(membersData);

  /* ==========================================
      Filters
  ========================================== */

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("All");

  const [selectedStatus, setSelectedStatus] = useState("All");

  /* ==========================================
      Pagination
  ========================================== */

  const [currentPage, setCurrentPage] = useState(1);

  /* ==========================================
      Filter Members
  ========================================== */

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const keyword = searchTerm.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(keyword) ||
        member.memberId.toLowerCase().includes(keyword) ||
        member.email.toLowerCase().includes(keyword) ||
        member.phone.includes(searchTerm);

      const matchesCourse =
        selectedCourse === "All" ||
        member.course === selectedCourse;

      const matchesStatus =
        selectedStatus === "All" ||
        member.status === selectedStatus;

      return (
        matchesSearch &&
        matchesCourse &&
        matchesStatus
      );
    });
  }, [
    members,
    searchTerm,
    selectedCourse,
    selectedStatus,
  ]);

  /* ==========================================
      Pagination
  ========================================== */

  const totalPages = Math.ceil(
    filteredMembers.length / MEMBERS_PER_PAGE
  );

  const paginatedMembers = useMemo(() => {
    const start =
      (currentPage - 1) * MEMBERS_PER_PAGE;

    return filteredMembers.slice(
      start,
      start + MEMBERS_PER_PAGE
    );
  }, [filteredMembers, currentPage]);

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

  /* ==========================================
      Global Search
  ========================================== */

  const goToMemberPage = (memberId) => {
    // Find the member in the COMPLETE dataset
    const memberIndex = members.findIndex(
      (member) => member.id === memberId
    );

    if (memberIndex === -1) return;

    // Reset filters so the member becomes visible
    setSearchTerm("");
    setSelectedCourse("All");
    setSelectedStatus("All");

    // Calculate page from ALL members
    const page =
      Math.floor(memberIndex / MEMBERS_PER_PAGE) + 1;

    setCurrentPage(page);
  };

  /* ==========================================
      CRUD
  ========================================== */

  const addMember = (newMember) => {
    setMembers((prev) => [
      {
        ...newMember,
        id: Date.now(),
      },
      ...prev,
    ]);

    setCurrentPage(1);
  };

  const updateMember = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id
          ? updatedMember
          : member
      )
    );
  };

  const deleteMember = (id) => {
    setMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );
  };

  /* ==========================================
      Reset Filters
  ========================================== */

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCourse("All");
    setSelectedStatus("All");
    setCurrentPage(1);
  };

  /* ==========================================
      Course List
  ========================================== */

  const courses = [
    "All",
    ...new Set(
      members.map((member) => member.course)
    ),
  ];

  /* ==========================================
      Return
  ========================================== */

  return {
    members: paginatedMembers,

    allMembers: members,

    filteredMembers,

    courses,

    searchTerm,
    setSearchTerm,

    selectedCourse,
    setSelectedCourse,

    selectedStatus,
    setSelectedStatus,

    currentPage,
    totalPages,

    nextPage,
    previousPage,

    goToMemberPage,

    addMember,
    updateMember,
    deleteMember,

    resetFilters,
  };
};

export default useMembers;