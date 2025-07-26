import '../css/MovieCard.css';

function MovieCard({ movie }) {
  function onFavoriteClik() {
    alert('cliked');
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClik}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.realese_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
