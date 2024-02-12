import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "white",
  borderRadius: "50%",
};

const LoadingContainer = {
  //   width: "40px",
  //   height: "30px",

  display: "flex",
  width: "100%",
  gap: "10px",
  justifyContent: "space-around",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "5%",
  },
  animate: {
    y: "40%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  //   ease: "easeInOut",
};

export default function TypingAnimation() {
  return (
    <div
      style={{
        // paddingTop: "5rem",
        paddingBottom: "2rem",
        // width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
