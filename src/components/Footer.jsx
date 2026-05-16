import { Link } from 'react-router-dom';
import './Footer.css';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Kontak', path: '/kontak' },
];

const serviceLinks = [
  'Konstruksi Gedung',
  'Infrastruktur Jalan',
  'Proyek Pemerintah',
  'Renovasi & Rehabilitasi',
];

const certs = ['SIUJK Nasional', 'ISO 9001:2015', 'K3', 'LPJK'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <img src="/logo.jpeg" alt="Khincai Favorit Group" className="footer__logo-image" />
            <p className="footer__tagline">
              Mitra terpercaya pemerintah dalam mewujudkan proyek konstruksi berkualitas di seluruh nusantara.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">Navigasi</div>
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer__col-title">Layanan</div>
            <ul className="footer__nav">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/layanan">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Kontak</div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Alamat</span>
              <span className="footer__contact-value">Jl. Placeholder No. 1, Jakarta, Indonesia</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Telepon</span>
              <span className="footer__contact-value">+62 21 000 0000</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span className="footer__contact-value">ptkhincaifavoritgroup@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} PT Khincai Favorit Group. Hak cipta dilindungi.
          </span>
          <div className="footer__certs">
            {certs.map((c) => (
              <div key={c} className="footer__cert">
                <div className="footer__cert-dot" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
