function MovieCard({ show, onDetails }) {
  const poster =
    show.image?.medium ||
    show.image?.original ||
    "https://via.placeholder.com/300x420?text=No+Image";

  const releaseYear = show.premiered
    ? show.premiered.substring(0, 4)
    : "Unknown";

  const rating = show.rating?.average || "N/A";

  return (
    <article className="movie-card">
      <img src={poster} alt={`${show.name || "Show"} poster`} />

      <div className="movie-card-content">
        <h2>{show.name || "Untitled Show"}</h2>

        <div className="movie-meta">
          <span>ID: {show.id}</span>
          <span>•</span>
          <span>★ {rating}</span>
          <span>•</span>
          <span>{releaseYear}</span>
        </div>

        <button
          type="button"
          className="details-button"
          onClick={() => onDetails(show)}
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
