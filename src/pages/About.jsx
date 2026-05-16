import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle2, Award, Users, Clock, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const values = [
  { icon: <Target size={24} />, title: 'Integritas', desc: 'Kami menjalankan setiap proyek dengan transparansi penuh dan kejujuran yang tidak dapat dikompromikan.' },
  { icon: <Award size={24} />, title: 'Kualitas', desc: 'Standar mutu tertinggi diterapkan dalam setiap aspek pekerjaan, dari perencanaan hingga penyelesaian.' },
  { icon: <Users size={24} />, title: 'Kolaborasi', desc: 'Kami percaya kemitraan yang kuat adalah fondasi dari setiap proyek yang berhasil.' },
  { icon: <Clock size={24} />, title: 'Ketepatan Waktu', desc: 'Komitmen kami terhadap jadwal adalah janji yang selalu kami pegang kepada setiap klien.' },
];

const milestones = [
  { year: '2025', title: 'Perusahaan Didirikan', desc: 'PT Khincai Favorit Group resmi berdiri dengan komitmen menjadi mitra terpercaya dalam konstruksi, penyediaan material, dan pengembangan real estate.' },
  { year: '2025', title: 'Perolehan NIB', desc: 'Berhasil mendapatkan Nomor Induk Berusaha (NIB) sebagai legalitas resmi operasional perusahaan.' },
  { year: '2025', title: 'Proyek Plantation', desc: 'Menjalankan proyek full package plantation di PT Sumatera Riang Lestari Estate Bayas dengan standar profesional tertinggi.' },
  { year: '2025-2026', title: 'Ekspansi Layanan', desc: 'Mengembangkan layanan terintegrasi meliputi konstruksi, leveransi, penyediaan material, land clearing, dan real estate.' },
  { year: 'Masa Depan', title: 'Target Pemerintah', desc: 'Fokus pada pengerjaan tender pemerintah (APBN/APBD) dan kemitraan strategis dengan instansi publik.' },
];

const team = [
  { name: 'Direktur Utama', role: 'Pimpinan Perusahaan', initial: 'DU' },
  { name: 'Direktur Teknik', role: 'Kepala Divisi Teknik', initial: 'DT' },
  { name: 'Manajer Proyek', role: 'Koordinasi Lapangan', initial: 'MP' },
  { name: 'Kepala Keuangan', role: 'Manajemen Keuangan', initial: 'KK' },
];

export default function About() {
  const [showNibModal, setShowNibModal] = useState(false);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showNibModal) {
        setShowNibModal(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showNibModal]);

  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__left">
          <div className="page-hero__left-inner container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Tentang Kami</span>
              <h1 className="page-hero__heading">
                Membangun Kepercayaan<br /><em>Sejak 2025</em>
              </h1>
              <p className="page-hero__sub">
                PT Khincai Favorit Group hadir sebagai mitra profesional dalam konstruksi, penyediaan material, dan pengembangan real estate dengan standar kualitas tertinggi.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="page-hero__divider" />

        <div className="page-hero__right">
          <div className="page-hero__est">2025</div>
          <div className="page-hero__est-label">Tahun Berdiri</div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="vm-section">
        <div className="container">
          <motion.div className="vm-section__inner" {...fadeUp}>
            <div className="vm-card vm-card--vision">
              <div className="vm-card__label"><Eye size={14} /> Visi</div>
              <h2>Menjadi kontraktor konstruksi terkemuka yang dipercaya pemerintah dan swasta dalam mewujudkan pembangunan Indonesia yang berkelanjutan.</h2>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-card__label"><Target size={14} /> Misi</div>
              <ul>
                {[
                  'Mengerjakan setiap proyek dengan standar kualitas dan keselamatan tertinggi',
                  'Membangun kemitraan jangka panjang dengan instansi pemerintah',
                  'Mengembangkan sumber daya manusia yang kompeten dan profesional',
                  'Menerapkan teknologi dan inovasi terkini dalam setiap pekerjaan konstruksi',
                  'Berkontribusi nyata terhadap pembangunan daerah dan nasional',
                ].map((item, i) => (
                  <li key={i}><CheckCircle2 size={14} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <motion.div className="values-header" {...fadeUp}>
            <span className="section-label">Nilai Perusahaan</span>
            <h2>Fondasi yang Membangun<br />Kepercayaan Kami</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className="value-card__num">0{i + 1}</div>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section">
        <div className="container">
          <motion.div className="timeline-header" {...fadeUp}>
            <span className="section-label">Perjalanan Kami</span>
            <h2>Rekam Jejak yang<br />Membuktikan Kompetensi</h2>
          </motion.div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`timeline-item timeline-item--${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <div className="timeline-item__content">
                  <span className="timeline-item__year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-item__dot" />
                {i % 2 !== 0 && <div />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="container">
          <motion.div className="team-header" {...fadeUp}>
            <span className="section-label">Tim Kami</span>
            <h2>Dipimpin oleh Para<br />Profesional Berpengalaman</h2>
          </motion.div>
          <div className="team-grid">
            {team.map((t, i) => (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className="team-card__avatar">{t.initial}</div>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </motion.div>
            ))}
          </div>
          <p className="team-note">* Foto dan profil lengkap tim akan segera diperbarui</p>
        </div>
      </section>

      {/* ── LEGALITY & CERTIFICATIONS ── */}
      <section className="legality-section">
        <div className="container">
          <motion.div className="legality-header" {...fadeUp}>
            <span className="section-label">Legalitas & Sertifikasi</span>
            <h2>Kredibilitas Terjamin<br />dengan Dokumen Resmi</h2>
            <p>PT Khincai Favorit Group memiliki legalitas penuh dan komitmen terhadap standar industri yang ketat.</p>
          </motion.div>
          <div className="legality-grid">
            <motion.div
              className="legality-card"
              {...fadeUp}
              transition={{ delay: 0.1 }}
            >
              <div className="legality-card__content">
                <div className="legality-card__icon">Dokumen</div>
                <h3>NIB (Nomor Induk Berusaha)</h3>
                <p>Legalitas resmi operasional perusahaan terdaftar di sistem OSS Kementerian Hukum dan HAM</p>
                <button className="btn-primary" onClick={() => setShowNibModal(true)}>
                  Lihat Dokumen <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <motion.div className="about-cta__inner container" {...fadeUp}>
          <h2>Tertarik Bekerja Sama<br />dengan Kami?</h2>
          <p>Hubungi kami untuk mendiskusikan bagaimana PT Khincai Favorit Group dapat mendukung proyek konstruksi Anda.</p>
          <Link to="/kontak" className="btn-ghost-light">
            Hubungi Kami <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── NIB Modal ── */}
      {showNibModal && (
        <div className="modal-overlay" onClick={() => setShowNibModal(false)}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={() => setShowNibModal(false)}>
              <X size={24} />
            </button>
            <img src="/NIB.jpeg" alt="NIB Certification - Full View" />
          </motion.div>
        </div>
      )}
    </main>
  );
}
