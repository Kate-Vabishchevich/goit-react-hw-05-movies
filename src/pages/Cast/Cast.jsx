import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCast } from 'services/fetchAPI';
import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCast(movieId);
        if (data.length === 0) {
          return;
        }
        setMovieCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieCast ? <CastList cast={movieCast} /> : <p>No results</p>}
      {error && Notiflix.Notify.failure('Sorry, something wrong')}
    </>
  );
};

export default Cast;
