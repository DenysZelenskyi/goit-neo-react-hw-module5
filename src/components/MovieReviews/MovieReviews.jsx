import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/tmdbAPI';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data.results);
    };

    getReviews();
  }, [movieId]);

  if (!reviews.length) return <div>No reviews available</div>;

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p><strong>Author:</strong> {review.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
