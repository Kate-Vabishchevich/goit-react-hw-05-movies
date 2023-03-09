import { useEffect, useState } from "react";
import getMovieCast from "services/fetchAPI";
import CastList from "components/CastList/CastList";
import Loader from "components/Loader/Loader";

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

     useEffect(() => {
        setIsLoading(true);
        const fetchCast = async () => {
            try {
                const data = await getMovieCast(movieId);
                // console.log('data:', data);
                if (data === 0) {
                    return
                }
                setMovieCast(data);
            }
            catch (error) {
                setError(error)
            }
            finally {
                setIsLoading(false)
            }
        };
        fetchCast();
     }, [movieId]);
    
    return (
        <>
            {isLoading && <Loader />}
            {movieCast && <CastList cast={ movieCast} />}  
        </>
    )

}