import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e58952305d798b0bf4a300c9b516b346';

export async function getTrendingFilms() {
    try {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        return data.results;
    }
    catch (error) {
        console.error('getTrendingFilms error' + error);
    }
}

export async function searchMovies(query) {
    try {
        const response = await axios.get(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        return data.results;
    }
    catch (error) {
        console.error('searchMovies error' + error);
    }
}

export async function getMovieDetails(movie_id) {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
        );
        return data.results;
    }
    catch (error) {
        console.error('getMovieDetails error' + error);
    }
}

export async function getMovieCast(movie_id) {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
        );
        return data.results;
    }
    catch (error) {
        console.error('getMovieCast error' + error);
    }
}

export async function getMovieReviews(movie_id) {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
        );
        return data.results;
    }
    catch (error) {
        console.error('getMovieReviews error' + error);
    }
}


