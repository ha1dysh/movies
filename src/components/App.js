import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Trends from '../pages/Trends';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Review from './Review/Review';

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
