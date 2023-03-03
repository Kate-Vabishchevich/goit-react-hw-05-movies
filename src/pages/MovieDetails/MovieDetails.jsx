import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchAPI';
import MovieCard from 'components/MovieCard/MovieCard';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            setMovie({ ...response });
        })
            .catch(error => setError(error));
    }, [movieId])

    return (
        <>
            {movie && (
                <>
                    <MovieCard movie={movie} />
                    <div>
                        <h2>Additional information</h2>
                        <ul className={css.list}>
                            <li>Cast</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                </>
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;