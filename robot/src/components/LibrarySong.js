import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
