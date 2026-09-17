import MovieCard from "./MovieCard";

function MovieGrid({ shows, onDetails }) {
  if (!shows || shows.length === 0) {
    return (
      <p className="status-message">
        No show was found. Please try searching with a different title.
      </p>
    );
  }

  return (
    <section className="movie-grid">
      {shows.slice(0, 12).map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onDetails={onDetails}
        />
      ))}
    </section>
  );
}

export default MovieGrid;
