import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo">
            <img src="/logo.jpeg" alt="Khincai Favorit Group" className="navbar__logo-image" />
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/kontak" className="btn-primary navbar__cta">
            Hubungi Kami
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation"
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`navbar__overlay${drawerOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`navbar__drawer${drawerOpen ? ' navbar__drawer--open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__drawer-link${location.pathname === link.path ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/kontak" className="btn-primary navbar__drawer-cta">
          Hubungi Kami
        </Link>
      </div>
    </>
  );
}
