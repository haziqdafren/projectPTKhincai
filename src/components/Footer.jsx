import { Link } from 'react-router-dom';
import './Footer.css';
import { trackEvent } from '../lib/analytics';

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

const trustPoints = [
  'NIB Terdaftar',
  'Dokumen Legal',
  'Pengalaman Proyek Plantation',
];

const WHATSAPP_NUMBER = '6282286312746';
const PHONE_DISPLAY = '+62 822-8631-2746';
const CONTACT_EMAIL = 'ptkhincaifavoritgroup@gmail.com';


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
              <span className="footer__contact-value">Jalan Azki Aris Ujung Gang Lembayung, Desa/Kelurahan Kampung Dagang, Kec. Rengat, Kab. Indragiri Hulu, Provinsi Riau</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Telepon</span>
              <span className="footer__contact-value">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('contact_click', { contact_method: 'whatsapp', location: 'footer' })}>{PHONE_DISPLAY}</a>
              </span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span className="footer__contact-value">
                <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => trackEvent('contact_click', { contact_method: 'email', location: 'footer' })}>{CONTACT_EMAIL}</a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} PT Khincai Favorit Group. Hak cipta dilindungi.
          </span>
          <div className="footer__trust-points">
            {trustPoints.map((point) => (
              <div key={point} className="footer__trust-point">
                <div className="footer__trust-dot" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
