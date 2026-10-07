import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import useMembers from "../../hooks/useMembers";
import useSearchStore from "../../store/searchStore";

import MembersToolbar from "../../components/members/MembersToolbar/MembersToolbar";
import MemberTable from "../../components/members/MemberTable/MemberTable";
import MemberPagination from "../../components/members/MemberPagination/MemberPagination";

import AddMemberModal from "../../components/members/MemberModals/AddMemberModal/AddMemberModal";
import EditMemberModal from "../../components/members/MemberModals/EditMemberModal/EditMemberModal";
import MemberDetailsModal from "../../components/members/MemberModals/MemberDetailsModal/MemberDetailsModal";
import DeleteMemberDialog from "../../components/members/MemberModals/DeleteMemberDialog/DeleteMemberDialog";

import styles from "./Members.module.css";

const Members = () => {
  const navigate = useNavigate();

  const { selectedItem, highlightedId, clearSelectedItem } = useSearchStore();

  const {
    members,
    allMembers,

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
  } = useMembers();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);

  const handleView = (member) => {
    setSelectedMember(member);
    setShowDetailsModal(true);
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setShowEditModal(true);
  };

  const handleDelete = (member) => {
    setSelectedMember(member);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    deleteMember(selectedMember.id);
    setShowDeleteDialog(false);
    setSelectedMember(null);
  };

  /* ==========================================
    Global Search Integration
========================================== */

  useEffect(() => {
    if (!selectedItem) return;

    if (selectedItem.type !== "Member") return;

    const member = allMembers.find((item) => item.id === selectedItem.id);

    if (!member) return;

    // Move to the correct page
    goToMemberPage(member.id);

    // Show highlight first, then open modal
    const timer = setTimeout(() => {
      setSelectedMember(member);
      setShowDetailsModal(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedItem, allMembers, goToMemberPage]);

  return (
    <div className={styles.page}>
      {/* Header */}

      <div className={styles.header}>
        <div>
          <h1>👥 Members Management</h1>
          <p>
            Manage library members, memberships, borrowing limits and account
            status.
          </p>
        </div>
      </div>

      {/* Toolbar */}

      <div className={styles.card}>
        <MembersToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          onReset={resetFilters}
          onAddMember={() => setShowAddModal(true)}
        />
      </div>

      {/* Table */}

      <div className={styles.card}>
        <MemberTable
          members={members}
          highlightedId={highlightedId}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Pagination */}

      {/* Pagination */}

      <div className={styles.paginationWrapper}>
        <MemberPagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          totalMembers={allMembers.length}
        />
      </div>

      {/* Modals */}

      <AddMemberModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddMember={addMember}
      />

      <EditMemberModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        selectedMember={selectedMember}
        onUpdateMember={updateMember}
      />

      <MemberDetailsModal
        isOpen={showDetailsModal}
        selectedMember={selectedMember}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedMember(null);
          clearSelectedItem();
        }}
      />

      <DeleteMemberDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        selectedMember={selectedMember}
      />
    </div>
  );
};

export default Members;
