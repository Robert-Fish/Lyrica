import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6 track">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4>{track.track_name}</h4>
          <h3>{track.artist_name}</h3>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fa fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
