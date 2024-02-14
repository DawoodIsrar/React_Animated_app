import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import man from "../assets/man.jpg";
import { FaSearch } from "react-icons/fa";
import TypingAnimation from "./typingAnimation";
import { useTypingContext } from "../Context/TypingContextProvider";
const leftDiv = {
  hidden: {
    opacity: 1,
    x: -100,
    y: +50,
    scale: 1,
    rotate: 90,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      when: "beforeChildren",
    },
    rotate: 0,
  },
};
const rightDiv = {
  hidden: {
    opacity: 0,
    x: +100,
    y: -50,
    scale: 1,
    rotate: 90,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      when: "beforeChildren",
    },

    rotate: 0,
  },
};
const TextAni = {
  hidden: {
    opacity: 0,
    y: "-1vw",
    scale: 1,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      when: "afterChildren",
    },
  },
};
const TypingDiv = {
  hidden: {
    opacity: 0,
    x: 0,
    y: +50,
    scale: 1,
    rotate: 90,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      when: "beforeChildren",
    },
    rotate: 0,
  },
};
const Personone = ({ setMessages, messages }) => {
  const { setUserTwoTyping } = useTypingContext();
  const { userOneTyping } = useTypingContext();

  const [clickedIndex, setClickedIndex] = useState(null);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  let typingTimer;

  const handleChange = () => {
    setUserTwoTyping(true);

    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setUserTwoTyping(false);
    }, 5000);
  };

  useEffect(() => {
    console.log("typing object in dawood", userOneTyping);
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
    // inputRef.current.focus();
  }, [userOneTyping]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (e) => {
    setUserTwoTyping(false);
    e.preventDefault();
    const inputValue = e.target.inputField.value.trim();
    if (inputValue) {
      const newItem = {
        text: inputValue,
        date: getCurrentTime(),
        user: "dawood",
      };
      setMessages(newItem);
      e.target.inputField.value = "";
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 3000);
  });

  const showTime = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
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
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <IoMdArrowRoundBack
            style={{
              width: "30px",
              height: "30px",
              color: "#208cff",
              paddingLeft: "20px",
            }}
          />
        </div>
        <div>
          <img
            src={man}
            style={{
              paddingTop: "10px",
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          ></img>
          <p style={{ color: "black" }}>Dawood Israr</p>
        </div>
        <div style={{}}>
          <FaSearch
            style={{
              width: "30px",
              height: "30px",
              color: "#208cff",
              paddingRight: "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "80vh",
          padding: "10px",
          overflowY: "scroll",
          height: "300px",
        }}
        ref={containerRef}
      >
        <motion.div>
          <AnimatePresence>
            {showDiv && (
              <div
                style={{
                  padding: "10px",
                  minWidth: "30px",
                  width: "80vh",
                  maxWidth: "fit-content",
                  overflowX: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  alignItems: "start",
                  backgroundColor: "lightgreen",
                  borderRadius: "15px 15px 15px 0",
                  fontSize: "small",
                  color: "black",
                  marginBottom: "20px",
                  whiteSpace: "normal",
                  height: "20px",
                }}
              >
                <TypingAnimation />
              </div>
            )}
            {!showDiv &&
              messages?.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: item.user === "dawood" ? "end" : "start",
                  }}
                  key={item.id}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "5px",
                      alignItems: "end",
                    }}
                  >
                    <motion.div
                      initial={
                        item.user === "dawood"
                          ? rightDiv.hidden
                          : leftDiv.hidden
                      }
                      animate={
                        item.user === "dawood" ? rightDiv.show : leftDiv.show
                      }
                      exit={
                        item.user === "dawood"
                          ? rightDiv.hidden
                          : leftDiv.hidden
                      }
                      custom={index}
                      variants={rightDiv}
                      className="text-container"
                      style={{
                        padding: "10px",
                        minWidth: "30px",
                        width: "100%",
                        maxWidth: "fit-content",
                        overflowX: "hidden",
                        justifySelf: "end",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "start",
                        alignItems: "start",
                        backgroundColor:
                          item.user === "dawood" ? "#208CFF" : "lightgreen",
                        borderRadius:
                          item.user === "dawood"
                            ? "15px 15px 0 15px"
                            : "15px 15px 15px 0",
                        fontSize: "small",
                        color: "white",
                        marginBottom: "20px",
                        whiteSpace: "normal",
                      }}
                      onClick={() => showTime(index)}
                      transition={{
                        delay: index * 0.1,
                        duration: 1,
                      }}
                    >
                      <motion.div
                        initial={TextAni.hidden}
                        animate={TextAni.show}
                        variants={TextAni}
                        className="content"
                      >
                        {item.text}
                      </motion.div>
                    </motion.div>
                    {clickedIndex === index && (
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: "12px",
                          color: "gray",
                        }}
                      >
                        Delivery Time: {getCurrentTime()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {userOneTyping && (
        <>
          <motion.div
            initial={TypingDiv.hidden}
            animate={TypingDiv.show}
            exit={TypingDiv.hidden}
            variants={TypingDiv}
            style={{
              alignSelf: "start",
              display: "flex",
              backgroundColor: "",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <div
              style={{
                padding: "10px",
                minWidth: "30px",
                marginLeft: "32px",
                width: "100%",
                maxWidth: "fit-content",
                overflowX: "hidden",
                justifySelf: "end",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "start",
                alignItems: "start",
                backgroundColor: "lightgreen",
                borderRadius: "15px 15px 15px 0",
                fontSize: "small",
                color: "black",
                marginBottom: "20px",
                height: "20px",
                whiteSpace: "normal",
              }}
            >
              <TypingAnimation />
            </div>
          </motion.div>
        </>
      )}
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
              paddingLeft: "20px",
              height: "40px",
              width: "70%",
              border: "none",
              borderRadius: "5px",
            }}
            ref={inputRef}
            // value={input}
            onChange={handleChange}
            type="text"
            name="inputField"
          />

          <motion.button
            type="submit"
            style={{
              borderRadius: "50px",
              width: "7%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoSend />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Personone;
