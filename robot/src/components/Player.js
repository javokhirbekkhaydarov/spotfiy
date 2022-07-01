import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>start time</p>
        <input type="range" />
        <p>end time</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon icon={FaPlay} />
      </div>
    </div>
  );
};

export default Player;
