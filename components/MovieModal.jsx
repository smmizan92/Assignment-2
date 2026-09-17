export default function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  const image =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/700x400?text=No+Image";

  const summaryText = show.summary
    ? show.summary.replace(/<[^>]*>/g, "")
    : "No summary is available for this show.";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close movie details"
        >
          <span aria-hidden="true">×</span>
        </button>

        <img
          className="modal-image"
          src={image}
          alt={`${show.name} poster`}
        />

        <div className="modal-content">
          <h2>{show.name}</h2>

          <div className="modal-meta">
            <span>Rating: {show.rating?.average || "N/A"}</span>
            <span>Release: {show.premiered || "Unknown"}</span>
          </div>

          <h3>Overview</h3>
          <p className="modal-description">{summaryText}</p>

          <h3>Genres</h3>
          <p className="modal-description">
            {show.genres?.join(", ") || "Not available"}
          </p>

          <button type="button" className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
