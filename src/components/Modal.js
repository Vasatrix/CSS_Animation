import React from 'react';
import { motion } from 'framer-motion';
import '../styles/animations.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Animated Modal</h2>
        <p>Experience beautiful UI animations!</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

export default Modal;
