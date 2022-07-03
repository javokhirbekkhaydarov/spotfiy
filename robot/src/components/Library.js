import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong  , audioRef , setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
           songs={songs}
           id={song.id}
           setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
