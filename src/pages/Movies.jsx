import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from '../services/API';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(searchParams.get('query'));

    e.target[0].value = '';
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query).then(setMovies);
  }, [query]);

  console.log(query);

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchParams({ query: e.target.value })}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {movies.map((e) => (
          <li key={e.id}>
            <Link state={{ from: location }} to={`${e.id}`}>
              {e.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
