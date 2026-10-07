import styles from "./BookDetailsModal.module.css";

const BookDetailsModal = ({
  isOpen,
  onClose,
  selectedBook,
}) => {
  if (!isOpen || !selectedBook) return null;

  

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Book Details</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.item}>
            <span>ISBN</span>
            <p>{selectedBook.isbn}</p>
          </div>

          <div className={styles.item}>
            <span>Accession No</span>
            <p>{selectedBook.accessionNo}</p>
          </div>

          <div className={styles.item}>
            <span>Title</span>
            <p>{selectedBook.title}</p>
          </div>

          <div className={styles.item}>
            <span>Author</span>
            <p>{selectedBook.author}</p>
          </div>

          <div className={styles.item}>
            <span>Category</span>
            <p>{selectedBook.category}</p>
          </div>

          <div className={styles.item}>
            <span>Publisher</span>
            <p>{selectedBook.publisher}</p>
          </div>

          <div className={styles.item}>
            <span>Edition</span>
            <p>{selectedBook.edition}</p>
          </div>

          <div className={styles.item}>
            <span>Language</span>
            <p>{selectedBook.language}</p>
          </div>

          <div className={styles.item}>
            <span>Published Year</span>
            <p>{selectedBook.publishedYear}</p>
          </div>

          <div className={styles.item}>
            <span>Total Copies</span>
            <p>{selectedBook.totalCopies}</p>
          </div>

          <div className={styles.item}>
            <span>Available Copies</span>
            <p>{selectedBook.availableCopies}</p>
          </div>

          <div className={styles.item}>
            <span>Shelf</span>
            <p>{selectedBook.shelf}</p>
          </div>

          <div className={styles.item}>
            <span>Price</span>
            <p>₹ {selectedBook.price}</p>
          </div>

          <div className={styles.item}>
            <span>Status</span>
            <p>{selectedBook.status}</p>
          </div>

          <div className={styles.item}>
            <span>Added Date</span>
            <p>{selectedBook.addedDate}</p>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default BookDetailsModal;