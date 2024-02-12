import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import man from "../assets/man.jpg";
import { FaSearch } from "react-icons/fa";
// import Taskrecieved from "./Task2";
// import { UserContext } from "./Chat";
import TypingAnimation from "./typingAnimation";
import { useTypingContext } from "../Context/TypingContextProvider";

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
      //   damping: 100,
      when: "afterChildren",
    },
  },
};

const Personone = ({ setMessages, messages }) => {
  const { setUserTwoTyping } = useTypingContext();
  const { userOneTyping } = useTypingContext();
  //   const [text, setText] = useState([]);
  //   const { isTyping } = props;
  //   const typing = isTyping?.isTyping;
  //   const user = isTyping?.user;
  //   const { isTyping, setIsTyping } = useContext(UserContext);

  const [clickedIndex, setClickedIndex] = useState(null); // Track clicked message index
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  console.log("props messages", messages);
  //   const [input, setInput] = useState("");
  let typingTimer;
  const handleChange = () => {
    // setInput(e.target.value);
    // handleTyping({
    //   userOne: false,
    //   userTwo: true,
    // });
    setUserTwoTyping(true);
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      setUserTwoTyping(false);
    }, 2000);
    // handleTyping({
    //   userOne: true,
    //   userTwo: false,
    // });
    // clearTimeout(typingTimer);
    // typingTimer = setTimeout(() => {
    //   handleTyping({
    //     isTyping: false,
    //     user: "",
    //   });
    // }, 2000); // Notify the parent component that typing has started
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
    e.preventDefault();
    const inputValue = e.target.inputField.value.trim();
    if (inputValue) {
      const newItem = {
        text: inputValue,
        date: getCurrentTime(),
        user: "dawood",
      };
      setMessages(newItem);
      //   setText((prevText) => [...prevText, newItem]);
      e.target.inputField.value = "";
      //   setInput("");
    }
  };
  //   handleTyping();

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const showTime = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };
  //   useEffect(() => {
  //     console.log("typing here in dawood comp", typing);
  //   });

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
          height: "300px", // Set the height of the container
        }}
        ref={containerRef}
      >
        <motion.div>
          <AnimatePresence>
            {messages?.map((item, index) => (
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
                      /* min-height: 50px; */
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "start",
                      alignItems: "start",
                      //   borderRadius: "12px",
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
                    onClick={() => showTime(index)} // Change here
                    transition={{
                      delay: index * 0.1,
                      duration: 1,
                    }}
                  >
                    <div className="content">{item.text}</div>
                  </motion.div>
                  {clickedIndex === index && ( // Change here
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
        {userOneTyping && (
          <>
            <motion.div
              initial={rightDiv.hidden}
              animate={rightDiv.show}
              exit={rightDiv.hidden}
              style={{
                width: "100%",
                display: "flex",
                backgroundColor: "",
                //   gap: "5px",
                //   width: "auto",
                //   backgroundColor: "lightblue",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  minWidth: "30px",
                  width: "100%",
                  maxWidth: "fit-content",
                  overflowX: "hidden",
                  //   justifySelf: "start",
                  /* min-height: 50px; */
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  alignItems: "start",
                  //   borderRadius: "12px",
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
            </motion.div>
          </>
        )}
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
