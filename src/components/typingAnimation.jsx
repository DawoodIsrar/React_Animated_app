import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
  display: "block",
  width: "10px",
  height: "10px",
  backgroundColor: "white",
  borderRadius: "50%",
};

const LoadingContainer = {
  //   width: "40px",
  //   height: "30px",

  display: "flex",
  width: "100%",
  height: "100%",
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
    y: "0%",
  },
  animate: {
    y: ["0%", "40%", "0%"],
  },
};

const DotTransition = {
  duration: 1,
  repeat: Infinity, // Repeat the animation indefinitely
  repeatType: "reverse",
  ease: "easeInOut",
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
