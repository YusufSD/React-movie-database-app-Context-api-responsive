export default (state, action) => {
  if (action.type === "ADD_MOVIE_TO_WATCHLIST") {
    return {
      ...state,
      watchlist: [...state.watchlist, action.payload],
      watched: state.watched.filter((movie) => movie.id !== action.payload.id),
    };
  } else if (action.type === "REMOVE_MOVIE_FROM_WATCHLIST") {
    return {
      ...state,
      watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
    };
  } else if (action.type === "ADD_MOVIE_TO_WATCHED") {
    return {
      ...state,
      watchlist: state.watchlist.filter(
        (movie) => movie.id !== action.payload.id
      ),
      watched: [...state.watched, action.payload],
    };
  } else if (action.type === "REMOVE_MOVIE_FROM_WATCHED") {
    return {
      ...state,
      watched: state.watched.filter((movie) => movie.id !== action.payload),
    };
  } else if (action.type === "SEND_TO_WATCHLIST") {
    return {
      ...state,
      watched: state.watched.filter((movie) => movie.id !== action.payload.id),
      watchlist: [...state.watchlist, action.payload],
    };
  } else {
    return state;
  }
};
