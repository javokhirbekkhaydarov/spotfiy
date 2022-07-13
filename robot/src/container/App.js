import React, { useState, useRef } from "react";
import Player from "../components/Player";
import Song from "../components/Song";
import "../styles/app.scss";
import Library from "../components/Library";
import data from "../data";
import Nav from "../components/Nav";
import UseLayoutEffect from "../components/UseLayoutEffect/UseLayoutEffect";
const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Ref
  const audioRef = useRef(null);

  //time update handler

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };
  //state

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    (<UseLayoutEffect />),
    (
      <div className={`App ${libraryStatus ? "library-active" : ""}`}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          audioRef={audioRef}
          setIsPlaying={setIsPlaying}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          timeUpdateHandler={timeUpdateHandler}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
        />
      </div>
    )
  );
};

export default App;
