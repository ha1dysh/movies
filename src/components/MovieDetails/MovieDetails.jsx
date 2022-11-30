import React, { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from '../../services/API';
import DetailsInfo from './DetailsInfo/DetailsInfo';
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

      {movie && <DetailsInfo movie={movie} />}

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
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
