import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle2, Award, Users, Clock } from 'lucide-react';
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
  { year: '2012', title: 'Perusahaan Didirikan', desc: 'PT Khincai Favorit Group resmi berdiri dengan fokus pada proyek konstruksi lokal.' },
  { year: '2015', title: 'Ekspansi Regional', desc: 'Memperluas jangkauan operasional ke seluruh wilayah dengan tim yang berkembang.' },
  { year: '2018', title: 'Kemitraan Pemerintah', desc: 'Berhasil mendapatkan kualifikasi kontraktor pemerintah dan memenangkan tender pertama.' },
  { year: '2021', title: 'Sertifikasi ISO', desc: 'Meraih sertifikasi ISO 9001:2015 sebagai bukti komitmen terhadap sistem manajemen mutu.' },
  { year: '2024', title: 'Proyek Strategis Nasional', desc: 'Terlibat dalam proyek infrastruktur strategis nasional berskala besar.' },
];

const team = [
  { name: 'Direktur Utama', role: 'Pimpinan Perusahaan', initial: 'DU' },
  { name: 'Direktur Teknik', role: 'Kepala Divisi Teknik', initial: 'DT' },
  { name: 'Manajer Proyek', role: 'Koordinasi Lapangan', initial: 'MP' },
  { name: 'Kepala Keuangan', role: 'Manajemen Keuangan', initial: 'KK' },
];

export default function About() {
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
                Membangun Kepercayaan<br /><em>Sejak 2012</em>
              </h1>
              <p className="page-hero__sub">
                Lebih dari satu dekade pengalaman membangun infrastruktur Indonesia dengan standar kualitas tertinggi dan komitmen penuh kepada setiap klien.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="page-hero__divider" />

        <div className="page-hero__right">
          <div className="page-hero__est">2012</div>
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
    </main>
  );
}
