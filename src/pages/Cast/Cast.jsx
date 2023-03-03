import { useEffect } from "react";
import getMovieCast from "services/fetchAPI";
import CastList from "components/CastList/CastList";
import { useState } from "react";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getMovieCast(movieId)
            .then(data => {
            setCast(data)
        })
    }, [movieId])
}