import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        if (data === 0) {
          return;
        }
        setTrendingMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {error && <p>Something went wrong. Please, refresh the page</p>}
      {isLoading && <Loader />}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
