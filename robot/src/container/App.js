import React, { useState } from "react";

import "./App.css";
const App = () => {
  const [messages, setMessages] = useState(0);

  const AddMessage = () => {
    setMessages((prev) => prev + 1);
  };
  const RemoveMessage = () => {
    setMessages((prev) => prev - 1);
  };
  return (
    <div className="container">
      <div className="card">
        <h1>Messages : {messages}</h1>
        <button className="btn circle" onClick={AddMessage}>Add</button>
        <button className="btn" onClick={RemoveMessage}>Remove</button>
      </div>
    </div>
  );
};

export default App;
