import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Trends from '../pages/Trends';
import MovieDetails from './MovieDetails/MovieDetails';

const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trends />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<Trends />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
