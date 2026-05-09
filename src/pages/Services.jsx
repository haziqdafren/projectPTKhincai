import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Hammer, Landmark, HardHat, Shield, TrendingUp, Wrench, ClipboardList } from 'lucide-react';
import './Services.css';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const services = [
  { icon: <Building2 size={32} />, number: '01', title: 'Konstruksi Gedung', desc: 'Pembangunan gedung komersial, perkantoran, fasilitas kesehatan, dan bangunan publik lainnya menggunakan teknologi konstruksi modern dengan standar kualitas internasional.', features: ['Gedung Perkantoran', 'Fasilitas Kesehatan', 'Gedung Pendidikan', 'Pusat Perbelanjaan'] },
  { icon: <Hammer size={32} />, number: '02', title: 'Infrastruktur Jalan & Jembatan', desc: 'Pengerjaan jalan raya, jalan tol, jembatan, dan infrastruktur transportasi dengan kapasitas teknis dan peralatan berat yang memadai.', features: ['Jalan Nasional', 'Jembatan & Flyover', 'Drainase Kota', 'Jalan Lingkungan'] },
  { icon: <Landmark size={32} />, number: '03', title: 'Proyek Tender Pemerintah', desc: 'Spesialis dalam proses pengadaan dan pelaksanaan tender pemerintah pusat dan daerah, dengan rekam jejak yang terbukti dan sistem administrasi yang akuntabel.', features: ['Tender APBN', 'Tender APBD', 'Proyek DAK', 'e-Katalog LKPP'] },
  { icon: <HardHat size={32} />, number: '04', title: 'Renovasi & Rehabilitasi', desc: 'Pembaruan dan rehabilitasi gedung, fasilitas publik, serta infrastruktur yang sudah ada dengan pendekatan yang meminimalkan gangguan operasional.', features: ['Renovasi Gedung', 'Perbaikan Jalan', 'Rehabilitasi Sekolah', 'Revitalisasi Pasar'] },
  { icon: <ClipboardList size={32} />, number: '05', title: 'Konsultasi & Manajemen Proyek', desc: 'Layanan konsultasi teknik, perencanaan desain, dan manajemen konstruksi profesional untuk memastikan setiap proyek berjalan efisien.', features: ['Perencanaan Teknik', 'Pengawasan Proyek', 'Studi Kelayakan', 'Audit Teknis'] },
  { icon: <TrendingUp size={32} />, number: '06', title: 'Pengadaan Barang & Material', desc: 'Penyediaan material konstruksi berkualitas, peralatan berat, dan logistik proyek dengan jaringan pemasok yang luas dan harga yang kompetitif.', features: ['Material Bangunan', 'Sewa Alat Berat', 'Logistik Proyek', 'Konsorsium Pengadaan'] },
  { icon: <Shield size={32} />, number: '07', title: 'Keselamatan & Lingkungan', desc: 'Penerapan sistem manajemen keselamatan kerja K3 dan AMDAL yang ketat di setiap proyek untuk menjamin keamanan pekerja dan kelestarian lingkungan.', features: ['Audit K3', 'AMDAL', 'Pelatihan Safety', 'SOP Lingkungan'] },
  { icon: <Wrench size={32} />, number: '08', title: 'Mekanikal & Elektrikal', desc: 'Pengerjaan sistem mekanikal, elektrikal, dan plumbing (MEP) untuk gedung dan fasilitas industri dengan teknisi bersertifikasi.', features: ['Instalasi Listrik', 'Sistem HVAC', 'Plumbing', 'Fire Protection'] },
];

const process = [
  { step: '01', title: 'Konsultasi Awal', desc: 'Diskusi kebutuhan dan ruang lingkup proyek bersama tim ahli kami.' },
  { step: '02', title: 'Penawaran & Perencanaan', desc: 'Penyusunan RAB, jadwal, dan rencana teknis yang komprehensif.' },
  { step: '03', title: 'Penandatanganan Kontrak', desc: 'Finalisasi kesepakatan dengan dokumen yang transparan dan legal.' },
  { step: '04', title: 'Pelaksanaan', desc: 'Pengerjaan proyek sesuai spesifikasi teknis dan timeline yang disepakati.' },
  { step: '05', title: 'Pengawasan & Laporan', desc: 'Monitoring progres berkala dan pelaporan kepada pihak pemberi kerja.' },
  { step: '06', title: 'Serah Terima', desc: 'Penyelesaian dan penyerahan proyek dengan jaminan kualitas penuh.' },
];

export default function Services() {
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
              <span className="section-label">Layanan Kami</span>
              <h1 className="page-hero__heading">
                Solusi Konstruksi<br /><em>Menyeluruh</em>
              </h1>
              <p className="page-hero__sub">
                Dari perencanaan hingga serah terima, kami menyediakan layanan konstruksi terintegrasi untuk memenuhi setiap kebutuhan proyek Anda.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="page-hero__divider" />
        <div className="page-hero__right">
          <div className="page-hero__est">8</div>
          <div className="page-hero__est-label">Layanan Tersedia</div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="services-list">
        <div className="container">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`service-row${i % 2 !== 0 ? ' service-row--reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-row__num">{s.number}</div>
              <div className="service-row__icon">{s.icon}</div>
              <div className="service-row__body">
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="service-row__features">
                  {s.features.map((f) => (
                    <span key={f} className="service-row__feature">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <motion.div className="process-header" {...fadeUp}>
            <span className="section-label">Cara Kerja Kami</span>
            <h2>Proses yang Transparan<br />dari Awal hingga Akhir</h2>
          </motion.div>
          <div className="process-grid">
            {process.map((p, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              >
                <div className="process-step__circle">{p.step}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="services-cta">
        <motion.div className="services-cta__inner container" {...fadeUp}>
          <div className="services-cta__text">
            <span className="section-label">Mulai Proyek Anda</span>
            <h2>Siap Wujudkan<br />Proyek Bersama?</h2>
            <p>Hubungi tim kami sekarang untuk mendapatkan konsultasi gratis dan penawaran terbaik untuk proyek Anda.</p>
          </div>
          <div className="services-cta__action">
            <Link to="/kontak" className="btn-primary">
              Dapatkan Penawaran <ArrowRight size={16} />
            </Link>
            <p className="services-cta__note">Respon dalam 1×24 jam kerja</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
