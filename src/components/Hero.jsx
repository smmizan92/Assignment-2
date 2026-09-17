import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <h1>Find Your Favorite Movies.</h1>

          <p className="hero-description">
            Explore popular movies, discover something new, and learn more about
            the titles you love.
          </p>

          <Link to="/movies" className="primary-button">
            EXPLORE MOVIES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
