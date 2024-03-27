"use client";
import { motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function Section_Heading({ children }: SectionHeadingProps) {
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      className="text-center text-3xl font-medium capitalize mb-8"
    >
      {Array.from(`${children}`).map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default Section_Heading;
