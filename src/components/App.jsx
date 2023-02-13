import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Loader } from './Loader/Loader';

export function App() {
  const Home = lazy(() => import('../pages/Home/Home'));
  const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
  const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
  const Cast = lazy(() => import('../pages/Cast/Cast'));
  const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
