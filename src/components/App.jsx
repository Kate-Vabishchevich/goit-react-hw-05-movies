import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path='movies' element={<Movies />} />
      <Route path='movies/:movieId' element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
