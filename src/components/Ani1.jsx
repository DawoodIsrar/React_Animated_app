import { motion } from "framer-motion";
import { useState } from "react";
import Task from "./Task";

const thirdDiv = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    scale: 1,
  },
  show: {
    opacity: 1.5,
    x: 0,
    scale: 1.2,
    transition: {
      delay: 0.2,
      duration: 5,
    },
  },
};
const rightDiv = {
  hidden: {
    opacity: 0,
    x: "+100vw",
    scale: 1,
  },
  show: {
    opacity: 1.5,
    x: 0,
    scale: 1.2,
    transition: {
      delay: 0.2,
      duration: 5,
    },
  },
};
const hoverEffect = {
  hidden: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  show: {
    opacity: 1.5,
    x: 0,
    scale: 1.2,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};
const clickEffect = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  show: {
    scale: [1.5],
    borderRadius: 50,
    opacity: 1,
    transition: {
      duration: 5,
    },
  },
};

export const MyComponent = () => {
  const [clicked, setClicked] = useState(false);
  //   const [text, setText] = useState([]);
  //   handleSend = (value) => {
  //     setText(value);
  //   };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        {/* <Task></Task> */}
      </div>

      <motion.div
        style={{ backgroundColor: "blue", height: "50px", width: "100px" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: "red",
          height: "50px",
          width: "100px",
          marginTop: "50px",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>

      <motion.div
        style={{
          backgroundColor: "blue",
          height: "50px",
          width: "100px",
          marginTop: "50px",
        }}
        variants={thirdDiv}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: "yellow",
          height: "50px",
          width: "100px",
          marginTop: "50px",
        }}
        variants={rightDiv}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: "blue",
          height: "50px",
          width: "100px",
          marginTop: "50px",
        }}
        whileHover="show"
        variants={hoverEffect}
        initial="hidden"
      ></motion.div>

      <div
        className="parent"
        style={{
          width: "400px",
          marginTop: "50px",
          height: "300px",
          borderRadius: "25px",
          backgroundColor: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          drag
          dragConstraints={{
            top: 50,
            left: 50,
            right: 50,
            bottom: 50,
          }}
          className="child"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        ></motion.div>
      </div>

      <motion.div
        className="parent"
        variants={clickEffect}
        whileInView="show"
        initial={clicked ? "show" : "hidden"}
        style={{
          width: "200px",
          marginTop: "50px",
          height: "200px",
          borderRadius: "25px",
          backgroundColor: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          onClick={() => setClicked((clicked) => !clicked)}
          drag
          dragConstraints={{
            top: 50,
            left: 50,
            right: 50,
            bottom: 50,
          }}
          className="child"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        ></motion.div>
      </motion.div>
    </>
  );
};
