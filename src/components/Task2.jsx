import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import man from "../assets/man.jpg";
import { FaSearch } from "react-icons/fa";
import { useTypingContext } from "../Context/TypingContextProvider";
import TypingAnimation from "./typingAnimation";

const rightDiv = {
  hidden: {
    opacity: 0,
    y: "+1vw",
    scale: 1,
  },
  show: {
    opacity: 1.5,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const Personone = ({ setMessages, messages }) => {
  const { setUserOneTyping } = useTypingContext();
  const { userTwoTyping } = useTypingContext();
  const [clickedIndex, setClickedIndex] = useState(null); // Track clicked message index
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  let typingTimer;

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);

    setUserOneTyping(true);

    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setUserOneTyping(false);
    }, 2000);
  };

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [userTwoTyping]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputField.value.trim();
    if (inputValue) {
      const newItem = {
        text: inputValue,
        date: getCurrentTime(),
        user: "haris",
      };
      setMessages(newItem);
      //   setText((prevText) => [...prevText, newItem]);
      e.target.inputField.value = "";
      setInput("");
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

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
          //   padding: "10px",
          //   paddingInline: "20px",
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
          <p style={{ color: "black" }}>Haris khan</p>
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
            {messages?.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: item.user === "haris" ? "end" : "start",
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
                    initial={rightDiv.hidden}
                    animate={rightDiv.show}
                    exit={rightDiv.hidden}
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
                        item.user === "haris" ? "#208CFF" : "lightgreen",
                      borderRadius:
                        item.user === "haris"
                          ? "15px 15px 0 15px"
                          : "15px 15px 15px 0 ",
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
                    <div className="content">{item.text}</div>
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
        {userTwoTyping && (
          <>
            <motion.div
              initial={rightDiv.hidden}
              animate={rightDiv.show}
              exit={rightDiv.hidden}
              style={{
                width: "100%",
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
      </div>

      <div style={{ width: "100%", padding: "10px" }}>
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
              paddingLeft: "20px",
              width: "70%",
              border: "none",
              borderRadius: "5px",
            }}
            onChange={handleChange}
            ref={inputRef}
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
