import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllShows, searchShows } from "../services/get-movies";

export default function Movie() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAllShows();
        setShows(data);
      } catch {
        setError("Couldn’t load the movies. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const searchText = query.trim();

    try {
      setSearching(true);
      setError("");

      if (!searchText) {
        setError("Please enter a movie name before searching.");
        return;
      }

      const results = await searchShows(searchText);
      setShows(results);
    } catch {
      setError("There was a problem while searching.");
      setShows([]);
    } finally {
      setSearching(false);
    }
  };

  const handleClearSearch = async () => {
    setQuery("");

    try {
      setSearching(true);
      setError("");

      const allMovies = await getAllShows();
      setShows(allMovies);
    } catch {
      setError("Could not reload the movies. Please try again.");
    } finally {
      setSearching(false);
    };
  }

  return (
    <div className="movies-page">
      <Navbar />

      <main className="movies-container">
        <section className="movies-heading">
          <p className="eyebrow">EXPLORE THE COLLECTION</p>
          <h1>Find your favorite Movies</h1>
          <p>
            Search through popular Movies and discover detailed information
            about each title.
          </p>
        </section>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            aria-label="Search for a movie"
          />

          <button type="submit" disabled={searching}>
            {searching ? "Searching..." : "Search"}
          </button>

          {query && (
            <button
              type="button"
              className="clear-button"
              onClick={handleClearSearch}
            >
              Clear
            </button>
          )}
        </form>

        {loading && <p className="status-message">Loading Movies...</p>}

        {error && <p className="error-message">{error}</p>}

        {!loading && !error && shows.length === 0 && (
          <p className="status-message">
            No show was found. Please try searching with a different title.
          </p>
        )}

        {!loading && !error && shows.length > 0 && (
          <MovieGrid shows={shows} onDetails={setSelectedShow} />
        )}
      </main>

      <MovieModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />

      <Footer />
    </div>
  );
}
