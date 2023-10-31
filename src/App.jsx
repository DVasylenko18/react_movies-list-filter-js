import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, filterValue) {
  let filteredMovies = [...movies];
  const searchValue = filterValue.trim().toLowerCase();

  if (searchValue) {
    filteredMovies
    = filteredMovies
        .filter(movie => movie.title.trim().toLowerCase().includes(searchValue)
    || movie.description.trim().toLowerCase().includes(searchValue));
  }

  return filteredMovies;
}

export const App = () => {
  const [filterValue, setFilter] = useState('');
  const preparedMovies = getPreparedMovies(moviesFromServer, filterValue);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={filterValue}
                onChange={(event) => {
                  setFilter(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
