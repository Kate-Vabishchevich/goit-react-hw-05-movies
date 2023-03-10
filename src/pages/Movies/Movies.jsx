import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/fetchAPI';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(searchValue);
        if (data === 0) {
          return;
        }
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error &&
        Notiflix.Notify.failure(
          'Sorry, we did not find this movie. Please repeat the search'
        )}
    </main>
  );
};

export default Movies;
