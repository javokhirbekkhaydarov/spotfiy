import React from "react";

const LibrarySong = ({ song  ,  setCurrentSong , audioRef,isPlaying}) => {

  const songSelectHandler = () => {
    setCurrentSong(song)
    if(isPlaying) {
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined) {
        playPromise.then((audio)=>{
          audioRef.current.play()
        })
      }
    }
  }
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
