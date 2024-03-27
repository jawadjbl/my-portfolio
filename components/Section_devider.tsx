"use client";

import React from "react";
import { motion } from "framer-motion";

const Section_devider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="sm:flex justify-center py-10 items-center perspective"
    >
      <motion.div
        className="rounded-infinity-cube"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "30%",
          background: "linear-gradient(45deg, #16003B, #413F42)",
          animation: "rotation 5s infinite linear",
        }}
      >
        <div className="circle"></div>
      </motion.div>
    </motion.div>
  );
};

export default Section_devider;
// 45deg, #4CAF50, #2196F3
