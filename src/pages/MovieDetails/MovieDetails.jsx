import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchAPI';
import MovieCard from 'components/MovieCard/MovieCard';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const data = await getMovieDetails(movieId);
                console.log('data:', data);
                if (data === 0) {
                    return
                }
                setMovie(data);
            }
            catch (error) {
                setError(error)
            }
            finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, [movieId]);

    // useEffect(() => {
    //     getMovieDetails(movieId).then(response => {
    //         setMovie({ ...response });
    //     })
    //         .catch(error => setError(error));
    // }, [movieId])

    return (
        <>
            {movie && (
                <>
                    <MovieCard movie={movie} />
                    {/* <div>
                        <h2>Additional information</h2>
                        <ul className={css.list}>
                            <li>Cast</li>
                            <li>Reviews</li>
                        </ul>
                    </div> */}
                </>
            )}
            {error && <p>Something went wrong. Please, refresh the page</p>}
        </>
    );
};

export default MovieDetails;