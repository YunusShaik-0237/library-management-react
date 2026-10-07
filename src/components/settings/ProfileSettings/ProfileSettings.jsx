import { useRef, useState } from "react";
import { FaCamera, FaTrash } from "react-icons/fa";

import ConfirmationDialog from "../../common/ConfirmationDialog/ConfirmationDialog";

import styles from "./ProfileSettings.module.css";

const ProfileSettings = ({ profile, setProfile }) => {
  const fileInputRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);

  const [showDialog, setShowDialog] = useState(false);

  const [error, setError] = useState("");

  /* ==========================================
      Form Change
  ========================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ==========================================
      Upload Image
  ========================================== */

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, JPEG and PNG images are allowed.");

      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Maximum image size is 2MB.");

      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onload = (event) => {
      setPreviewImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  /* ==========================================
      Remove Image
  ========================================== */
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);

  const handleRemovePhoto = () => {
    setShowRemoveDialog(true);
  };

  const handleConfirmRemove = () => {
    setPreviewImage(null);
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setShowRemoveDialog(false);
  };

  /* ==========================================
      Save
  ========================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowDialog(true);
  };

  const handleConfirmSave = () => {
    console.log({
      ...profile,
      profilePhoto: previewImage,
    });

    setShowDialog(false);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <h2>Profile Information</h2>

            <p>
              Manage your administrator profile information and profile picture.
            </p>
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </div>

        {/* ==========================
            Profile Card
        ========================== */}

        <div className={styles.profileCard}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              {previewImage ? (
                <img src={previewImage} alt="Profile" />
              ) : (
                profile.name?.charAt(0)?.toUpperCase()
              )}
            </div>

            <div className={styles.cameraOverlay} onClick={handleUploadClick}>
              <FaCamera />
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".png,.jpg,.jpeg"
              className={styles.fileInput}
              onChange={handleImageChange}
            />
          </div>

          <div className={styles.profileInfo}>
            <h3>{profile.name}</h3>

            <span>{profile.role}</span>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.uploadBtn}
                onClick={handleUploadClick}
              >
                Upload Photo
              </button>

              {previewImage && (
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={handleRemovePhoto}
                >
                  <FaTrash />
                  Remove
                </button>
              )}
            </div>

            {error && (
              <p
                style={{
                  color: "#dc2626",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Form Card Starts */}
        <div className={styles.formCard}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Role</label>

              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                placeholder="Administrator"
              />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Address</label>

              <textarea
                rows="5"
                name="address"
                value={profile.address}
                onChange={handleChange}
                placeholder="Enter address..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className={styles.footer}>
          <button type="reset" className={styles.cancelBtn}>
            Cancel
          </button>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </div>
      </form>

      {/* Remove Photo Confirmation Dialog */}

      <ConfirmationDialog
        isOpen={showRemoveDialog}
        title="Remove Profile Photo"
        message="Are you sure you want to remove your profile photo?"
        confirmText="Remove"
        cancelText="Cancel"
        type="danger"
        onClose={() => setShowRemoveDialog(false)}
        onConfirm={handleConfirmRemove}
      />

      {/* Confirmation Dialog */}

      <ConfirmationDialog
        isOpen={showDialog}
        title="Save Profile"
        message="Are you sure you want to save the profile changes?"
        confirmText="Save"
        cancelText="Cancel"
        type="primary"
        onClose={() => setShowDialog(false)}
        onConfirm={handleConfirmSave}
      />
    </>
  );
};

export default ProfileSettings;
