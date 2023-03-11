import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchAPI';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log('backLink', backLinkHref);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        if (data === 0) {
          return;
        }
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref} className={css.go_back}>
        &larr; Go back
      </Link>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <div>
            <h2>Additional information</h2>
            <ul className={css.list}>
              <Link
                to="cast"
                state={{ from: backLinkHref }}
                className={css.movie_link}
              >
                <li>Cast</li>
              </Link>
              <Link
                to="reviews"
                state={{ from: backLinkHref }}
                className={css.movie_link}
              >
                <li>Reviews</li>
              </Link>
            </ul>
          </div>
        </>
      )}
      {error && <p>Something went wrong. Please, refresh the page</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
