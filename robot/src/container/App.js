import React, { useState, useMemo } from "react";
import Player from "../components/Player";
import Song from "../components/Song";
import "../styles/app.scss";
import "./App.css";
import Library from "../components/Library";
import data from "../data";
const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
};

export default App;
