import { useState } from 'react';
import Layout from '../components/Layout';
import DiscussionForm from '../components/DiscussionForm';
import MessageList from '../components/MessageList';

export default function Discussion() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleMessageSubmitted = () => {
    // Trigger refresh of message list when new message is submitted
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <Layout>
      <section className="section">
        <div className="section-title">
          <h1>Forum Diskusi KIP Kuliah</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Tempat untuk bertanya dan berdiskusi seputar KIP Kuliah UIN Jakarta. 
            Ajukan pertanyaan Anda dan dapatkan jawaban dari perwakilan resmi atau 
            sesama mahasiswa penerima KIP Kuliah.
          </p>
        </div>

        <div className="discussion-container">
          {/* Discussion Form */}
          <DiscussionForm onMessageSubmitted={handleMessageSubmitted} />

          {/* Discussion Guidelines */}
          <div className="card" style={{ backgroundColor: 'rgba(0, 112, 243, 0.05)', border: '1px solid var(--accent-color)', marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }}>Panduan Diskusi</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Gunakan bahasa yang sopan dan santun dalam bertanya</li>
              <li>Berikan informasi yang jelas dan spesifik dalam pertanyaan Anda</li>
              <li>Hindari menanyakan informasi pribadi atau data sensitif</li>
              <li>Periksa apakah pertanyaan serupa sudah pernah diajukan sebelumnya</li>
              <li>Bersabar menunggu jawaban dari tim admin atau perwakilan resmi</li>
              <li>Bantu sesama mahasiswa dengan berbagi pengalaman yang bermanfaat</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h3>Pertanyaan yang Sering Diajukan (FAQ)</h3>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h4>Q: Kapan jadwal pembayaran KIP Kuliah?</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                A: Pembayaran KIP Kuliah biasanya dilakukan setiap 3 bulan sekali. 
                Jadwal pasti akan diumumkan melalui website resmi dan email mahasiswa.
              </p>

              <h4>Q: Bagaimana cara mengecek status pencairan dana?</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                A: Anda dapat mengecek status pencairan melalui halaman "Seleksi" 
                dengan memasukkan NIM, atau menghubungi admin KIP Kuliah langsung.
              </p>

              <h4>Q: Apa yang harus dilakukan jika IPK turun di bawah 2.75?</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                A: Segera hubungi admin KIP Kuliah untuk konsultasi. Anda akan diberikan 
                kesempatan perbaikan dalam 1 semester berikutnya.
              </p>

              <h4>Q: Bisakah KIP Kuliah diperpanjang jika masa studi melebihi batas normal?</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                A: KIP Kuliah diberikan sesuai masa studi normal. Perpanjangan hanya 
                dimungkinkan dalam kondisi khusus dengan persetujuan tim pengelola.
              </p>

              <h4>Q: Bagaimana cara melaporkan perubahan data pribadi atau keluarga?</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                A: Laporkan perubahan data melalui email kipkuliah@uinjkt.ac.id dengan 
                melampirkan dokumen pendukung yang diperlukan.
              </p>
            </div>
          </div>

          {/* Message List */}
          <MessageList refreshTrigger={refreshTrigger} />

          {/* Contact Information */}
          <div className="card" style={{ backgroundColor: 'var(--surface-color)', marginTop: '2rem' }}>
            <h3>Kontak Langsung</h3>
            <p>
              Untuk pertanyaan yang bersifat urgent atau memerlukan penanganan khusus, 
              Anda dapat menghubungi tim KIP Kuliah UIN Jakarta secara langsung:
            </p>
            
            <div className="card-grid" style={{ marginTop: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h4>📧 Email</h4>
                <p>kipkuliah@uinjkt.ac.id</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h4>📞 Telepon</h4>
                <p>(021) 7401925</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h4>🕒 Jam Layanan</h4>
                <p>Senin - Jumat<br />08:00 - 16:00 WIB</p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="card" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid var(--success-color)', marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--success-color)' }}>Tips Bertanya yang Efektif</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Spesifik:</strong> Jelaskan masalah atau pertanyaan dengan detail yang cukup</li>
              <li><strong>Konteks:</strong> Berikan informasi latar belakang yang relevan</li>
              <li><strong>Jelas:</strong> Gunakan kalimat yang mudah dipahami</li>
              <li><strong>Sabar:</strong> Tunggu jawaban dengan sabar, biasanya dalam 1-2 hari kerja</li>
              <li><strong>Follow-up:</strong> Jika belum mendapat jawaban dalam 3 hari, silakan tanyakan kembali</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
