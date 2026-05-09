import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, Building2, Hammer, Landmark, HardHat, Shield, TrendingUp } from 'lucide-react';
import './Home.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '12+', label: 'Tahun Pengalaman' },
  { value: '30+', label: 'Klien Terpercaya' },
  { value: '15+', label: 'Mitra Pemerintah' },
];

const services = [
  { icon: <Building2 size={28} />, title: 'Konstruksi Gedung', desc: 'Pembangunan gedung komersial, perkantoran, dan fasilitas publik dengan standar kualitas tinggi.' },
  { icon: <Hammer size={28} />, title: 'Infrastruktur Jalan', desc: 'Pengerjaan jalan raya, jembatan, dan infrastruktur transportasi skala nasional.' },
  { icon: <Landmark size={28} />, title: 'Proyek Pemerintah', desc: 'Spesialis tender dan pengerjaan proyek pemerintah pusat dan daerah di seluruh Indonesia.' },
  { icon: <HardHat size={28} />, title: 'Renovasi & Rehabilitasi', desc: 'Pembaruan bangunan lama dan fasilitas publik dengan pendekatan modern dan efisien.' },
  { icon: <Shield size={28} />, title: 'Konsultasi Teknik', desc: 'Layanan konsultasi perencanaan, desain, dan manajemen konstruksi profesional.' },
  { icon: <TrendingUp size={28} />, title: 'Pengadaan Barang', desc: 'Penyediaan material dan peralatan konstruksi berkualitas untuk kebutuhan proyek skala besar.' },
];

const whyUs = [
  'Pengalaman lebih dari 12 tahun di industri konstruksi',
  'Tim ahli bersertifikasi nasional dan internasional',
  'Rekam jejak proyek pemerintah yang solid',
  'Standar keselamatan kerja K3 yang ketat',
  'Sistem manajemen mutu ISO 9001',
  'Tepat waktu dan efisien dalam setiap proyek',
];

const certs = ['SIUJK Nasional', 'ISO 9001:2015', 'Standar K3', 'LPJK Terverifikasi', 'e-Katalog LKPP', 'BUMN Partner'];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__left-inner container">
            <motion.div {...fadeUp}>
              <span className="section-label">Kontraktor &amp; Konstruksi Profesional</span>
            </motion.div>
            <motion.h1
              className="hero__heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Membangun<br />
              <em>Infrastruktur</em><br />
              Indonesia
            </motion.h1>
            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              PT Khincai Favorit Group hadir sebagai mitra terpercaya pemerintah dalam mewujudkan proyek konstruksi berkualitas — dari gedung, jalan, hingga fasilitas publik di seluruh nusantara.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <Link to="/layanan" className="btn-primary">
                Lihat Layanan Kami <ArrowRight size={16} />
              </Link>
              <Link to="/kontak" className="btn-ghost">
                Konsultasi Gratis
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="hero__divider" />

        <div className="hero__right">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
            >
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
              {i < stats.length - 1 && <div className="hero__stat-divider" style={{ marginTop: '1.5rem' }} />}
            </motion.div>
          ))}
          <div className="hero__brand-vertical">PT Khincai Favorit Group · Est. 2012</div>
        </div>
      </section>

      {/* Mobile stats */}
      <div className="hero__stats-mobile">
        {stats.map((s, i) => (
          <div key={i} className="hero__stat-mobile">
            <span className="hero__stat-mobile-value">{s.value}</span>
            <span className="hero__stat-mobile-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="container about-strip__inner">
          <motion.div {...fadeUp}>
            <span className="section-label">Tentang Perusahaan</span>
            <h2 className="about-strip__heading">
              Dipercaya Pemerintah,<br /><em>Terbukti</em> di Lapangan
            </h2>
            <p className="about-strip__body">
              PT Khincai Favorit Group adalah perusahaan kontraktor yang berpengalaman dalam mengerjakan proyek-proyek strategis nasional. Kami berkomitmen untuk mendukung pembangunan Indonesia melalui kemitraan yang transparan, akuntabel, dan profesional.
            </p>
            <ul className="about-strip__list">
              {whyUs.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/tentang" className="btn-primary">
              Selengkapnya <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="about-strip__cards"
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="about-strip__card">
              <div className="about-strip__card-icon"><Award size={28} /></div>
              <h3>Kontraktor Grade B</h3>
              <p>Kualifikasi resmi untuk mengerjakan proyek pemerintah skala menengah hingga besar.</p>
            </div>
            <div className="about-strip__card">
              <div className="about-strip__card-icon"><Users size={28} /></div>
              <h3>Tim Profesional</h3>
              <p>Didukung tenaga ahli bersertifikasi dengan pengalaman lapangan bertahun-tahun.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <div className="services-section__header">
            <motion.div {...fadeUp}>
              <span className="section-label">Layanan Kami</span>
              <h2 className="services-section__heading">
                Solusi Konstruksi<br /><em>Lengkap</em> &amp; Terintegrasi
              </h2>
            </motion.div>
            <Link to="/layanan" className="services-section__all">
              Semua Layanan <ArrowRight size={14} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card__num">0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-bar">
        <div className="container trust-bar__inner">
          <motion.div {...fadeUp}>
            <span className="section-label" style={{ color: 'var(--red-700)' }}>Mengapa Kami</span>
            <h2 className="trust-bar__heading">
              Mitra Strategis untuk<br />Tender Pemerintah
            </h2>
            <p className="trust-bar__body">
              Dengan rekam jejak yang solid dan kepatuhan penuh terhadap regulasi pengadaan barang/jasa pemerintah, PT Khincai Favorit Group siap menjadi rekanan andalan instansi pemerintah.
            </p>
            <Link to="/kontak" className="btn-ghost-light">
              Diskusikan Proyek Anda <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="trust-bar__certs"
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {certs.map((c, i) => (
              <div key={i} className="trust-cert">
                <div className="trust-cert__dot" />
                <span>{c}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner__inner container">
          <motion.div {...fadeUp}>
            <div className="cta-banner__label">Siap Bekerja Sama?</div>
            <h2 className="cta-banner__heading">
              Wujudkan Proyek Anda<br />Bersama Kami
            </h2>
            <p className="cta-banner__body">
              Hubungi tim kami untuk konsultasi awal tanpa biaya. Kami siap memberikan solusi konstruksi terbaik sesuai kebutuhan proyek Anda.
            </p>
            <div className="cta-banner__actions">
              <Link to="/kontak" className="btn-ghost-light">
                Hubungi Kami Sekarang <ArrowRight size={16} />
              </Link>
              <Link to="/layanan" className="btn-ghost-light">
                Pelajari Layanan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
