import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { watchlist, watched, addMovieToWatchList, addMovieToWatched } =
    useContext(GlobalContext);

  const selectedWatchListMovie = watchlist.find(
    (selectedMovie) => selectedMovie.id === movie.id
  );
  const selectedWatchedMovie = watched.find(
    (selectedMovie) => selectedMovie.id === movie.id
  )
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB:{" "}
            <b>{movie.vote_average ? movie.vote_average.toFixed(1) : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
            disabled={selectedWatchListMovie}
          >
            Add To WatchList
          </button>
          <button
            onClick={() => addMovieToWatched(movie)}
            disabled={selectedWatchedMovie}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
