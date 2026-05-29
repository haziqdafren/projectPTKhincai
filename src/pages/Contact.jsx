import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const WHATSAPP_NUMBER = '6282286312746';
const PHONE_DISPLAY = '+62 822-8631-2746';
const CONTACT_EMAIL = 'ptkhincaifavoritgroup@gmail.com';
const OFFICE_ADDRESS = 'Jl. Azki Aris Gg. Lembayung Tugu 5, Medan';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`;

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
    const details = [
      inquiryMsg,
      '',
      `Nama: ${formData.nama || '[Nama Anda]'}`,
      `Perusahaan: ${formData.perusahaan || '[Perusahaan]'}`,
      `No. Telepon: ${formData.telepon || '[No. Telepon]'}`,
      `Pesan Tambahan: ${formData.pesan || '-'}`,
    ];
    const encodedMsg = encodeURIComponent(details.join('\n'));
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
                  <span className="contact-info-card__value">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">{OFFICE_ADDRESS}</a>
                  </span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Phone size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Nomor Telepon</span>
                  <span className="contact-info-card__value">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                      {PHONE_DISPLAY}
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Email</span>
                  <span className="contact-info-card__value">
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <div className="contact-map-placeholder__header">
                <span>Lokasi Kami</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Buka Google Maps</a>
              </div>
              <iframe
                title="Lokasi PT Khincai Favorit Group di Google Maps"
                src={MAPS_EMBED_URL}
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
