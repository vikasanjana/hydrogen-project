import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./HybridDrawer.module.css"; // Modular CSS for scoped styling

/**
 * A reusable, production-ready drawer component for Remix applications.
 *
 * @param {string} header - The header text for the modal.
 * @param {React.ReactNode} content - The content to render inside the drawer.
 * @param {boolean} isVisible - Controls the visibility of the drawer.
 * @param {function} onClose - Callback function triggered when the drawer closes.
 * @param {function} [onBack] - Optional callback function for the back button.
 * @returns {JSX.Element}
 */
const HybridDrawer = ({ header, content, isVisible, onClose, onBack }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    // Lock body scroll when drawer is visible
    if (isVisible) {
      document.documentElement.classList.add(styles.locked);
    } else {
      document.documentElement.classList.remove(styles.locked);
    }

    // Handle focus trap within the drawer
    if (isVisible && drawerRef.current) {
      drawerRef.current.focus();
    }

    return () => {
      document.documentElement.classList.remove(styles.locked);
    };
  }, [isVisible]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isVisible) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={styles.overlay}
        onClick={onClose}
        aria-hidden="true"
        role="button"
      ></div>

      {/* Drawer */}
      <div
        id="te-modal"
        className={styles.drawer}
        ref={drawerRef}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="te-modal-heading"
        aria-modal="true"
      >
        {/* Header */}
        <header id="te-modal-heading" className={styles.header}>
          {onBack && (
            <button
              className={styles.backBtn}
              aria-label="Go back"
              onClick={onBack}
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </button>
          )}
          <h2 className={styles.title}>{header}</h2>
          <button
            className={styles.closeBtn}
            aria-label="Close drawer"
            onClick={onClose}
          >
            &times;
          </button>
        </header>

        {/* Content */}
        <div id="te-modal-content" className={styles.content}>
          {content}
        </div>
      </div>
    </>
  );
};

HybridDrawer.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func,
};

export default HybridDrawer;
