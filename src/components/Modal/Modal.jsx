import React from "react";

import { motion } from "framer-motion";

import "./Modal.scss";

export const Modal = ({ open, setOpen }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("background")) {
      setOpen(null);
    }
  };

  return (
    <motion.div
      className="background"
      onPointerUp={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={open}
        alt="opened_pic"
      />
    </motion.div>
  );
};
