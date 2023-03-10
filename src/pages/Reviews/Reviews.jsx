import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchAPI';
import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        console.log('dataReviews:', data);
        if (data.length === 0) {
          return;
        }
        setMovieReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {/* {movieCast ? <CastList cast={movieCast} /> : <p>No results</p>} */}
      {error && Notiflix.Notify.failure('Sorry, something wrong')}
    </>
  );
};

export default Reviews;
