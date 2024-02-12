import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSend } from "react-icons/io5";

const rightDiv = {
  hidden: {
    opacity: 0,
    y: "+5vw",
    scale: 1,
  },
  show: {
    opacity: 1.5,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      damping: 100,
      when: "afterChildren",
    },
  },
};

const Task = () => {
  const [text, setText] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputField.value.trim();
    if (inputValue) {
      const newItem = {
        text: inputValue,
        id: Date.now(),
      };

      setText((prevText) => [...prevText, newItem]);
      e.target.inputField.value = "";

      // Scroll to the last element
      const lastElement = containerRef.current.lastChild;
      if (lastElement) {
        lastElement.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  return (
    <div
      style={{
        width: "100vh",
        height: "500px",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0px",
        justifyContent: "flex-end",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "80vh",
          padding: "10px",
          overflowY: "scroll",
          height: "300px", // Set the height of the container
        }}
        ref={containerRef}
      >
        <motion.div>
          <AnimatePresence>
            {text.map((item, index) => (
              <div
                style={{ display: "flex", justifyContent: "end" }}
                key={item.id}
              >
                <motion.div
                  initial={rightDiv.hidden}
                  animate={rightDiv.show}
                  exit={rightDiv.hidden}
                  custom={index}
                  variants={rightDiv}
                  className="text-container"
                  transition={{
                    delay: index * 0.1,
                    duration: 1,
                  }}
                >
                  <div className="content">{item.text}</div>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div style={{ width: "100%" }}>
        <form
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "10px",
          }}
          onSubmit={handleSend}
        >
          <motion.input
            style={{
              height: "40px",
              width: "40%",
              border: "none",
              borderRadius: "5px",
            }}
            ref={inputRef}
            type="text"
            name="inputField"
          />

          <motion.button
            type="submit"
            style={{ borderRadius: "50px", width: "20%" }}
          >
            <IoSend />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Task;
// const getCurrentTime = () => {
//     const currentTime = new Date();
//     const hours = currentTime.getHours().toString().padStart(2, "0");
//     const minutes = currentTime.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   };

//      <div
//                   style={{
//                     textAlign: "right",
//                     fontSize: "12px",
//                     color: "gray",
//                   }}
//                 >
//                   Delivery Time: {getCurrentTime()}
//                 </div>
