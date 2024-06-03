import React, { useState } from "react";
import ResultCard from "./ResultCard";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setResult(data.results);
        } else {
          setResult[0];
        }
      });
  };
  return (
    <div className="add-page">
      <div className="add-content">
        <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
        <div className="titles">
          <h1>Hoş Geldiniz!</h1>
          <h2>
            Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
          </h2>
        </div>

        <div className="input-wrapper">
          <input
            onChange={handleChange}
            value={query}
            type="text"
            placeholder="Film, dizi, kişi ara..."
          />
        </div>
      </div>

      <div className="column_wrapper">
        <img src="https://iconape.com/wp-content/files/fu/339954/svg/339954.svg" />
        <button>
          View the winners <span>→</span>
        </button>
      </div>

      <div className="resultSection">
        {results.length > 0 && (
          <ul className="results">
            {results.map((movie, index) => (
              <li key={index}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
