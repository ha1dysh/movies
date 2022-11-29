import React, { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from '../../services/API';
import './MovieDetails.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from}>Go back</Link>
      {movie && (
        <div className="details">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              alt="img"
              width="250"
            ></img>
          </div>

          <div>
            <h1>{movie.original_title}</h1>
            <div>
              {`user score:
              ${movie.vote_average.toFixed(1).split('.').join('')}%`}
            </div>
            <h3>Overview</h3>
            <div>{movie.overview}</div>
            <h3>Genres</h3>
            <div>
              {movie.genres.map((e) => (
                <span key={e.id}>{`${e.name} `}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink state={{ from: location.state?.from }} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink state={{ from: location.state?.from }} to="review">
            Review
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
