import { useState } from "react";

import useReturns from "../../hooks/useReturns";

import ReturnToolbar from "../../components/returns/ReturnToolbar/ReturnToolbar";
import ReturnTable from "../../components/returns/ReturnTable/ReturnTable";
import ReturnPagination from "../../components/returns/ReturnPagination/ReturnPagination";

import ReturnDetailsModal from "../../components/returns/ReturnModals/ReturnDetailsModal/ReturnDetailsModal";
import EditReturnModal from "../../components/returns/ReturnModals/EditReturnModal/EditReturnModal";
import DeleteReturnDialog from "../../components/returns/ReturnModals/DeleteReturnDialog/DeleteReturnDialog";

import styles from "./Returns.module.css";

const Returns = () => {
  const {
    returns,
    allReturns,

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
  } = useReturns();

  const [showDetailsModal, setShowDetailsModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteDialog, setShowDeleteDialog] =
    useState(false);

  const [selectedReturn, setSelectedReturn] =
    useState(null);

  const handleView = (item) => {
    setSelectedReturn(item);
    setShowDetailsModal(true);
  };

  const handleEdit = (item) => {
    setSelectedReturn(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    setSelectedReturn(item);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    deleteReturn(selectedReturn.id);

    setShowDeleteDialog(false);

    setSelectedReturn(null);
  };

  return (
    <div className={styles.page}>
      {/* ================= Banner ================= */}

      <div className={styles.header}>
        <div>
          <h1>📦 Return Books</h1>

          <p>
            Manage returned books and collected
            fines.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h2>{returnedToday}</h2>
            <span>Returned Today</span>
          </div>

          <div className={styles.statCard}>
            <h2>{totalReturned}</h2>
            <span>Total Returned</span>
          </div>

          <div className={styles.statCard}>
            <h2>{fineCollectedCount}</h2>
            <span>Fine Records</span>
          </div>

          <div className={styles.statCard}>
            <h2>₹{totalFineCollected}</h2>
            <span>Total Fine</span>
          </div>
        </div>
      </div>

      {/* ================= Toolbar ================= */}

      <div className={styles.card}>
        <ReturnToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}

          books={books}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}

          members={members}
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}

          selectedFine={selectedFine}
          setSelectedFine={setSelectedFine}

          onReset={resetFilters}
        />
      </div>

      {/* ================= Table ================= */}

      <div className={styles.card}>
        <ReturnTable
          returns={returns}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* ================= Pagination ================= */}

      <div className={styles.paginationWrapper}>
        <ReturnPagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          totalReturns={allReturns.length}
        />
      </div>

      {/* ================= Modals ================= */}

      <ReturnDetailsModal
        isOpen={showDetailsModal}
        onClose={() =>
          setShowDetailsModal(false)
        }
        selectedReturn={selectedReturn}
      />

      <EditReturnModal
        isOpen={showEditModal}
        onClose={() =>
          setShowEditModal(false)
        }
        selectedReturn={selectedReturn}
        onUpdateReturn={updateReturn}
      />

      <DeleteReturnDialog
        isOpen={showDeleteDialog}
        onClose={() =>
          setShowDeleteDialog(false)
        }
        selectedReturn={selectedReturn}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Returns;