import { useMemo, useState, useEffect } from "react";

import booksData from "../../data/booksData";

import useSearchStore from "../../store/searchStore";

import BooksToolbar from "../../components/books/BooksToolbar/BooksToolbar";
import BookTable from "../../components/books/BookTable/BookTable";
import BookPagination from "../../components/books/BookPagination/BookPagination";

import AddBookModal from "../../components/books/AddBookModal/AddBookModal";
import EditBookModal from "../../components/books/EditBookModal/EditBookModal";
import DeleteBookDialog from "../../components/books/DeleteBookDialog/DeleteBookDialog";
import BookDetailsModal from "../../components/books/BookDetailsModal/BookDetailsModal";

import styles from "./Books.module.css";

const BOOKS_PER_PAGE = 5;

const Books = () => {
  /* ==========================================
      Search Store
  ========================================== */

  const { selectedItem, clearSelectedItem } = useSearchStore();

  /* ==========================================
      Main State
  ========================================== */

  const [books, setBooks] = useState(booksData);

  /* ==========================================
      Filters
  ========================================== */

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedStatus, setSelectedStatus] = useState("All");

  /* ==========================================
      Pagination
  ========================================== */

  const [currentPage, setCurrentPage] = useState(1);

  /* ==========================================
      Selected Book
  ========================================== */

  const [selectedBook, setSelectedBook] = useState(null);

  /* ==========================================
      Modals
  ========================================== */

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  /* ==========================================
      Categories
  ========================================== */

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  /* ==========================================
      Filter Books
  ========================================== */

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.includes(searchTerm);

      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" || book.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [books, searchTerm, selectedCategory, selectedStatus]);
  /* ==========================================
      Pagination Logic
  ========================================== */

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * BOOKS_PER_PAGE;

    return filteredBooks.slice(start, start + BOOKS_PER_PAGE);
  }, [filteredBooks, currentPage]);

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
      Reset Filters
  ========================================== */

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedStatus("All");
    setCurrentPage(1);
  };

  /* ==========================================
      CRUD Functions
  ========================================== */

  const addBook = (book) => {
    setBooks((prev) => [
      {
        ...book,
        id: Date.now(),
      },
      ...prev,
    ]);

    setCurrentPage(1);
  };

  const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
    );
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  /* ==========================================
      View
  ========================================== */

  const handleView = (book) => {
    setSelectedBook(book);
    setIsDetailsModalOpen(true);
  };

  /* ==========================================
      Edit
  ========================================== */

  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  /* ==========================================
      Delete
  ========================================== */

  const handleDelete = (book) => {
    setSelectedBook(book);
    setIsDeleteModalOpen(true);
  };

  /* ==========================================
      Global Search Navigation
  ========================================== */

  useEffect(() => {
    if (!selectedItem) return;

    if (selectedItem.type !== "Book") return;

    const bookIndex = books.findIndex((book) => book.id === selectedItem.id);

    if (bookIndex === -1) return;

    const page = Math.floor(bookIndex / BOOKS_PER_PAGE) + 1;

    setCurrentPage(page);

    const book = books[bookIndex];

    setSelectedBook(book);

    setTimeout(() => {
      setIsDetailsModalOpen(true);
    }, 800);
  }, [selectedItem, books]);

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <div>
          <h1>📚 Books Management</h1>

          <p>
            Manage library books, search inventory, and perform add, edit,
            delete, and view operations.
          </p>
        </div>

        <div className={styles.bookCount}>
          <h2>{books.length}</h2>

          <span>Total Books</span>
        </div>
      </div>

      {/* Toolbar */}

      <BooksToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        onReset={resetFilters}
        onAddBook={() => setIsAddModalOpen(true)}
      />

      {/* Table */}

      <BookTable
        books={paginatedBooks}
        highlightedId={selectedItem?.id}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}

      <BookPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
      />

      {/* Add Book */}

      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={addBook}
      />

      {/* Edit Book */}

      <EditBookModal
        isOpen={isEditModalOpen}
        selectedBook={selectedBook}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedBook(null);
        }}
        onUpdateBook={updateBook}
      />

      {/* Delete */}

      <DeleteBookDialog
        isOpen={isDeleteModalOpen}
        selectedBook={selectedBook}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedBook(null);
        }}
        onDelete={deleteBook}
      />

      {/* Details */}

      <BookDetailsModal
        isOpen={isDetailsModalOpen}
        selectedBook={selectedBook}
        onClose={() => {
          setIsDetailsModalOpen(false);
          setSelectedBook(null);
          clearSelectedItem();
        }}
      />
    </div>
  );
};

export default Books;
