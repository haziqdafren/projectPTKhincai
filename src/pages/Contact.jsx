import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const WHATSAPP_NUMBER = '6282286312746';
const OFFICE_ADDRESS = 'Jl.Azki Aris Gg.Lembayung Tugu 5, Medan, Indonesia';

const inquiryTypes = [
  { value: 'general', label: 'Pertanyaan Umum', message: 'Halo, saya ingin menanyakan informasi umum tentang PT Khincai Favorit Group.' },
  { value: 'collaboration', label: 'Kolaborasi & Proyek', message: 'Halo, saya tertarik untuk berdiskusi tentang kolaborasi dan peluang proyek bersama PT Khincai Favorit Group.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ nama: '', perusahaan: '', telepon: '', pesan: '' });
  const [selectedInquiry, setSelectedInquiry] = useState('general');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = () => {
    const inquiryMsg = inquiryTypes.find(t => t.value === selectedInquiry)?.message || '';
    const fullMessage = `${inquiryMsg}\n\nNama: ${formData.nama || '[Nama Anda]'}\nPerusahaan: ${formData.perusahaan || '[Perusahaan]'}\nNo. Telepon: ${formData.telepon || '[No. Telepon]'}`;
    const encodedMsg = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppClick();
  };

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
          <p>Tim kami siap membantu Anda merencanakan dan mewujudkan proyek terbaik. Hubungi kami untuk konsultasi awal tanpa biaya.</p>
        </motion.div>
      </section>

      {/* ── Main ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Info */}
          <motion.div className="contact-info" {...fadeUp}>
            <h2>Informasi Kontak</h2>
            <p className="contact-info__sub">
              Kami beroperasi Senin–Jumat, 08.00–17.00 WIB. Hubungi kami via WhatsApp untuk respon yang lebih cepat.
            </p>

            <div className="contact-info__cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><MapPin size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Alamat Kantor</span>
                  <span className="contact-info-card__value">{OFFICE_ADDRESS}</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Phone size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Nomor Telepon</span>
                  <span className="contact-info-card__value">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      +62 822-8631-2746
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Email</span>
                  <span className="contact-info-card__value">ptkhincaifavoritgroup@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <span>Lokasi Kami</span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5892897445887!2d98.6661!3d3.1949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313155555555%3A0x555555555555!2sJl.Azki%20Aris%20Gg.Lembayung%20Tugu%205%2C%20Medan!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="contact-form-title">Hubungi Kami via WhatsApp</div>
            <p className="contact-form-sub">
              Pilih jenis pertanyaan, isi data Anda, dan kami akan menghubungi Anda melalui WhatsApp.
            </p>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-field">
                <label htmlFor="inquiry-type">Jenis Pertanyaan</label>
                <select
                  id="inquiry-type"
                  value={selectedInquiry}
                  onChange={(e) => setSelectedInquiry(e.target.value)}
                  className="form-select"
                >
                  {inquiryTypes.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama Lengkap"
                  value={formData.nama}
                  onChange={handleInputChange}
                />
                <label htmlFor="nama">Nama Lengkap</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input
                  type="text"
                  id="perusahaan"
                  name="perusahaan"
                  placeholder="Perusahaan / Instansi"
                  value={formData.perusahaan}
                  onChange={handleInputChange}
                />
                <label htmlFor="perusahaan">Perusahaan / Instansi</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  placeholder="Nomor Telepon"
                  value={formData.telepon}
                  onChange={handleInputChange}
                />
                <label htmlFor="telepon">Nomor Telepon</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Pesan Tambahan (Opsional)"
                  rows={5}
                  value={formData.pesan}
                  onChange={handleInputChange}
                />
                <label htmlFor="pesan">Pesan Tambahan (Opsional)</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-primary">
                  Kirim via WhatsApp
                </button>
                <p className="form-submit__note">Respon cepat melalui WhatsApp</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
