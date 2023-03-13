import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import ReviewsList from 'components/ReviewsList/ReviewsList';

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
      {movieReviews ? (
        <ReviewsList review={movieReviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && Notiflix.Notify.failure('Sorry, something wrong')}
    </>
  );
};

export default Reviews;
