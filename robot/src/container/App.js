import React, { useState , useMemo } from "react";
import ChildMessages from "../components/ChildMessages";

import "./App.css";
const App = () => {
  const [messages, setMessages] = useState(0);

  const AddMessage = () => {
    setMessages((prev) => prev + 1);
  };

  useMemo(() => {
    return ChildMessages
  } , [])
  return (
    <div className="container">
      <div className="card">
        <h1>Messages : {messages}</h1>
        <ChildMessages />
        <button className="btn circle" onClick={AddMessage}>
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
