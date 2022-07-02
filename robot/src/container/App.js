import React, { useState, useMemo } from "react";
import Player from "../components/Player";
import Song from "../components/Song";
import "../styles/app.scss";
import "./App.css";

import data from "../data";
const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <>
      <Song currentSong={currentSong}/> <Player />
    </>
  );
};

export default App;
