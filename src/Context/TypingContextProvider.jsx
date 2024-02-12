import { createContext, useState, useContext } from "react";

export const TypingContext = createContext({
  userOneTyping: false,
  setUserOneTyping: () => "",
  userTwoTyping: false,
  setUserTwoTyping: () => "",
});
export const TypingContextProvider = ({ children }) => {
  const [userOneTyping, setUserOneTyping] = useState(false);
  const [userTwoTyping, setUserTwoTyping] = useState(false);

  return (
    <TypingContext.Provider
      value={{
        userOneTyping,
        userTwoTyping,
        setUserOneTyping,
        setUserTwoTyping,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};
export const useTypingContext = () => useContext(TypingContext);
