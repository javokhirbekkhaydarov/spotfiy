import React, { useState, useMemo } from "react";
import Player from "../components/Player";
import Song from "../components/Song";
import "../styles/app.scss"
import "./App.css";

const App = () => {
  return (
    <>
      <Song /> <Player />
    </>
  );
};

export default App;
