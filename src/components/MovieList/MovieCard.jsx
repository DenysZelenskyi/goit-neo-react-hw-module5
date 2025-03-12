const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date } = movie;

  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width="200"
      />
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
    </li>
  );
};

export default MovieCard;
