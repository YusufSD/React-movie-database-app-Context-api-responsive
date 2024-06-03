import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    removeMovieFromWatched,
    sendToWatchList,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" ? (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      ) : (
        <>
          <button className="ctrl-btn" onClick={() => sendToWatchList(movie)}>
            <FaEyeSlash />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
