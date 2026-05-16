import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Briefcase } from 'lucide-react';
import './Portfolio.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const projects = [
  {
    id: 1,
    title: 'Full Package Plantation Development',
    client: 'PT Sumatera Riang Lestari Estate Bayas',
    location: 'Sumatera, Indonesia',
    category: 'Land Clearing & Development',
    year: '2025',
    description: 'Proyek full package plantation yang mencakup pembersihan lahan, persiapan tanah, dan pengembangan infrastruktur pertanian skala besar untuk mendukung operasional perkebunan modern.',
    features: [
      'Land Clearing & Site Preparation',
      'Infrastructure Development',
      'Drainage & Water Management',
      'Access Road Construction',
      'Equipment Installation Support',
    ],
    images: [
      'WhatsApp Image 2026-05-12 at 20.52.28 (1).jpeg',
      'WhatsApp Image 2026-05-12 at 20.52.28.jpeg',
      'WhatsApp Image 2026-05-12 at 20.52.28 (2).jpeg',
    ],
    status: 'On Progress',
  },
];

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__left">
          <div className="page-hero__left-inner container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Portfolio Kami</span>
              <h1 className="page-hero__heading">
                Dokumentasi<br /><em>Proyek Terbaik</em>
              </h1>
              <p className="page-hero__sub">
                Lihat pengalaman kami dalam mengerjakan berbagai jenis proyek dengan standar kualitas profesional dan dedikasi penuh.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="page-hero__divider" />
        <div className="page-hero__right">
          <div className="page-hero__est">{projects.length}</div>
          <div className="page-hero__est-label">Proyek Showcase</div>
        </div>
      </section>

      {/* ── Projects Gallery ── */}
      <section className="portfolio-gallery">
        <div className="container">
          {projects.map((project) => (
            <motion.div key={project.id} className="portfolio-item" {...fadeUp}>
              {/* Project Header */}
              <div className="portfolio-item__header">
                <div className="portfolio-item__meta">
                  <div className="portfolio-item__info">
                    <h2 className="portfolio-item__title">{project.title}</h2>
                    <p className="portfolio-item__client">{project.client}</p>
                  </div>
                </div>

                <div className="portfolio-item__details">
                  <div className="detail-box">
                    <MapPin size={18} />
                    <div>
                      <span className="detail-label">Lokasi</span>
                      <span className="detail-value">{project.location}</span>
                    </div>
                  </div>
                  <div className="detail-box">
                    <Calendar size={18} />
                    <div>
                      <span className="detail-label">Tahun</span>
                      <span className="detail-value">{project.year}</span>
                    </div>
                  </div>
                  <div className="detail-box">
                    <Briefcase size={18} />
                    <div>
                      <span className="detail-label">Kategori</span>
                      <span className="detail-value">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="portfolio-item__description">
                <p className="portfolio-item__desc-text">{project.description}</p>

                <div className="portfolio-item__features">
                  <h3>Ruang Lingkup Proyek</h3>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Images Gallery */}
              <div className="portfolio-item__gallery">
                {project.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="gallery-item"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <img src={`/${image}`} alt={`${project.title} - ${idx + 1}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="portfolio-cta">
        <motion.div className="portfolio-cta__inner container" {...fadeUp}>
          <h2>Tertarik Bekerja Sama?</h2>
          <p>Hubungi kami untuk mendiskusikan proyek konstruksi, pengembangan lahan, atau penyediaan material Anda.</p>
          <div className="portfolio-cta__actions">
            <Link to="/kontak" className="btn-primary">
              Hubungi Kami <ArrowRight size={16} />
            </Link>
            <Link to="/layanan" className="btn-ghost-light">
              Lihat Layanan <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
