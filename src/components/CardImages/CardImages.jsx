import React from "react";
import { useFirestore } from "../hooks/useFirestore";

import { motion } from "framer-motion";

import "./CardImages.scss";

export const CardImages = ({ setOpen }) => {
  const { doc } = useFirestore("images");

  return (
    <div className="img">
      {doc &&
        doc.map((item) => (
          <motion.div
            className="img__wrapper"
            key={item.id}
            onPointerUp={() => setOpen(item.url)}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={item.url}
              alt="uploaded_image"
            />
          </motion.div>
        ))}
    </div>
  );
};
