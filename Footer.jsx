import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <strong className="footer-brand">Movie Explorer</strong>

          <nav className="footer-links" aria-label="Social links">
            <a
              className="social-github"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MovieExplorer on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              className="social-linkedin"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MovieExplorer on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              className="social-instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MovieExplorer on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              className="social-facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MovieExplorer on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
          </nav>
        </div>

        <p>© 2026 MovieExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
}
