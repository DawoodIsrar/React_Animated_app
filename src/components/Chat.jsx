import { useState } from "react";
import Personone from "./Task3";
import Persontwo from "./Task2";

// Create the context
// export const UserContext = createContext();

const Chat = () => {
  const [messages, setMessages] = useState([]);
  //   const [isTyping, setIsTyping] = useState({
  //     userOne: false,
  //     userTwo: false,
  //   });

  const handleMessages = (value) => {
    setMessages([...messages, value]);
  };

  //   const handleTyping = (value) => {
  //     setIsTyping({ ...isTyping, ...value });
  //   };

  return (
    // <UserContext.Provider value={{ isTyping, setIsTyping }}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
      className="chats"
    >
      <Personone
        setMessages={handleMessages}
        messages={messages}
        //   handleTyping={handleTyping}
      />
      <Persontwo
        setMessages={handleMessages}
        messages={messages}
        //   handleTyping={handleTyping}
      />
    </div>
    // </UserContext.Provider>
  );
};

export default Chat;
