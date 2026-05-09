import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* ── Hero ── */}
      <section className="contact-page__hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Hubungi Kami</span>
          <h1>Mari Berdiskusi<br />tentang Proyek Anda</h1>
          <p>Tim kami siap membantu Anda merencanakan dan mewujudkan proyek konstruksi terbaik. Hubungi kami untuk konsultasi awal tanpa biaya.</p>
        </motion.div>
      </section>

      {/* ── Main ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Info */}
          <motion.div className="contact-info" {...fadeUp}>
            <h2>Informasi Kontak</h2>
            <p className="contact-info__sub">
              Kami beroperasi Senin–Jumat, 08.00–17.00 WIB. Untuk keperluan mendesak, hubungi nomor darurat kami.
            </p>

            <div className="contact-info__cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><MapPin size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Alamat Kantor</span>
                  <span className="contact-info-card__value">Jl. Placeholder No. 1, Kota Placeholder,<br />Jakarta, Indonesia 10000</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Phone size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Nomor Telepon</span>
                  <span className="contact-info-card__value">+62 21 000 0000</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Email</span>
                  <span className="contact-info-card__value">info@khincaifavorit.co.id</span>
                </div>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <span>Lokasi Kami</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="contact-form-title">Kirim Pesan</div>
            <p className="contact-form-sub">
              Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <input type="text" id="nama" name="nama" placeholder="Nama Lengkap" />
                <label htmlFor="nama">Nama Lengkap</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input type="text" id="perusahaan" name="perusahaan" placeholder="Perusahaan / Instansi" />
                <label htmlFor="perusahaan">Perusahaan / Instansi</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input type="tel" id="telepon" name="telepon" placeholder="Nomor Telepon" />
                <label htmlFor="telepon">Nomor Telepon</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <textarea id="pesan" name="pesan" placeholder="Pesan Anda" rows={5} />
                <label htmlFor="pesan">Pesan Anda</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-primary">
                  Kirim Pesan
                </button>
                <p className="form-submit__note">Respon dalam 1×24 jam kerja</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
