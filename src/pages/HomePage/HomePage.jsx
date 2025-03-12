import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/tmdbAPI.js";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error.message)
            }
        };

        getTrendingMovies();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Trending Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;