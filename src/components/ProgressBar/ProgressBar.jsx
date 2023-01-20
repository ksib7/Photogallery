import React, { useEffect } from "react";
import { useStorage } from "@/components/hooks/useStorage";

import { motion } from "framer-motion";

import "./ProgressBar.scss";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};
