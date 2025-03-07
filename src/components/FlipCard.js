import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/animations.css";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card-container" onClick={() => setFlipped(!flipped)}>
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="flip-card-front">
          <h2>Front</h2>
        </motion.div>
        <motion.div className="flip-card-back">
          <h2>Back</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
