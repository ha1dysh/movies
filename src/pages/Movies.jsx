import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from '../services/API';
import SearchForm from '../components/SearchForm/SearchForm';

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

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        setSearchParams={setSearchParams}
      />

      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
