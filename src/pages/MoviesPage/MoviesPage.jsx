import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const results = await searchMovies(query);
        setMovies(results.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  };

  return (
    <div className={styles.moviesPage}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for a movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      {error && <div>{error}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
