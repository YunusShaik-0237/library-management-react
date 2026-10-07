import { useState } from "react";

import useIssues from "../../hooks/useIssues";

import IssuesToolbar from "../../components/issues/IssuesToolbar/IssuesToolbar";
import IssueTable from "../../components/issues/IssueTable/IssueTable";
import IssuePagination from "../../components/issues/IssuePagination/IssuePagination";

import AddIssueModal from "../../components/issues/IssueModals/AddIssueModal/AddIssueModal";
import EditIssueModal from "../../components/issues/IssueModals/EditIssueModal/EditIssueModal";
import IssueDetailsModal from "../../components/issues/IssueModals/IssueDetailsModal/IssueDetailsModal";
import ReturnBookDialog from "../../components/issues/IssueModals/ReturnBookDialog/ReturnBookDialog";
import DeleteIssueDialog from "../../components/issues/IssueModals/DeleteIssueDialog/DeleteIssueDialog";

import styles from "./Issues.module.css";

const Issues = () => {
  const {
    issues,
    allIssues,

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
  } = useIssues();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showReturnDialog, setShowReturnDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [selectedIssue, setSelectedIssue] = useState(null);

  // View
  const handleView = (issue) => {
    setSelectedIssue(issue);
    setShowDetailsModal(true);
  };

  // Edit
  const handleEdit = (issue) => {
    setSelectedIssue(issue);
    setShowEditModal(true);
  };

  // Return
  const handleReturn = (issue) => {
    setSelectedIssue(issue);
    setShowReturnDialog(true);
  };

  const confirmReturn = (returnData) => {
  returnBook(selectedIssue.id, returnData);

  setShowReturnDialog(false);
  setSelectedIssue(null);
};

  // Delete
  const handleDelete = (issue) => {
    setSelectedIssue(issue);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    deleteIssue(selectedIssue.id);

    setShowDeleteDialog(false);
    setSelectedIssue(null);
  };

  return (
    <div className={styles.page}>
      {/* Banner */}

      <div className={styles.header}>
        <div>
          <h1>📚 Issue Books</h1>
          <p>
            Manage book issuing, due dates and return
            status.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h2>{issuedCount}</h2>
            <span>Issued</span>
          </div>

          <div className={styles.statCard}>
            <h2>{returnedCount}</h2>
            <span>Returned</span>
          </div>

          <div className={styles.statCard}>
            <h2>{overdueCount}</h2>
            <span>Overdue</span>
          </div>

          <div className={styles.statCard}>
            <h2>₹{totalFine}</h2>
            <span>Total Fine</span>
          </div>
        </div>
      </div>

      {/* Toolbar */}

      <div className={styles.card}>
        <IssuesToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          books={books}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          onReset={resetFilters}
          onAddIssue={() => setShowAddModal(true)}
        />
      </div>

      {/* Table */}

      <div className={styles.card}>
        <IssueTable
          issues={issues}
          onView={handleView}
          onEdit={handleEdit}
          onReturn={handleReturn}
          onDelete={handleDelete}
        />
      </div>

      {/* Pagination */}

      <div className={styles.paginationWrapper}>
        <IssuePagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          totalIssues={allIssues.length}
        />
      </div>

      {/* Modals */}

      <AddIssueModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddIssue={addIssue}
      />

      <EditIssueModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        selectedIssue={selectedIssue}
        onUpdateIssue={updateIssue}
      />

      <IssueDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        selectedIssue={selectedIssue}
      />

      <ReturnBookDialog
        isOpen={showReturnDialog}
        onClose={() => setShowReturnDialog(false)}
        selectedIssue={selectedIssue}
        onConfirm={confirmReturn}
      />

      <DeleteIssueDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        selectedIssue={selectedIssue}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Issues;