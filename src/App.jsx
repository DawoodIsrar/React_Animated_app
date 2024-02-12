import "./App.css";
import Chat from "./components/Chat";
// import { MyComponent } from "./components/Ani1";
// import Task from "./components/Task3";
// import Task2 from "./components/Task2";
// import { Example } from "./components/Example";
import { TypingContextProvider } from "./Context/TypingContextProvider";

function App() {
  return (
    <>
      {/* <MyComponent /> */}
      <TypingContextProvider>
        <Chat />
      </TypingContextProvider>
      {/* <Task /> */}
      {/* <Example></Example> */}
    </>
  );
}

export default App;
