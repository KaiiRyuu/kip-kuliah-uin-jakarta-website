import Layout from '../components/Layout';

export default function Requirements() {
  return (
    <Layout>
      <section className="section">
        <div className="section-title">
          <h1>Persyaratan KIP Kuliah</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Berikut adalah persyaratan lengkap untuk mendaftar dan menjadi penerima 
            KIP Kuliah di UIN Syarif Hidayatullah Jakarta. Pastikan Anda memenuhi 
            semua kriteria dan menyiapkan dokumen yang diperlukan.
          </p>
        </div>

        {/* Main Requirements */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="card">
            <h2>Syarat Umum Penerima KIP Kuliah</h2>
            
            <h3>A. Kriteria Utama</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Mahasiswa aktif UIN Syarif Hidayatullah Jakarta</li>
              <li>Mahasiswa Disabilitas yang membutuhkan bantuan biaya pendidikan</li>
              <li>Mahasiswa dengan UKT Golongan 1, 2, dan 3</li>
              <li>Mahasiswa yang terdampak Covid-19 secara ekonomi</li>
              <li>Memiliki Kartu Indonesia Pintar (KIP) atau memenuhi persyaratan untuk mendapatkan KIP Kuliah</li>
              <li>Tidak sedang menerima beasiswa dari sumber lain</li>
            </ul>

            <h3>B. Prioritas Khusus</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Pemegang Kartu Indonesia Pintar (KIP)</li>
              <li>Mahasiswa dari keluarga peserta Program Keluarga Harapan (PKH)</li>
              <li>Mahasiswa dari keluarga pemegang Kartu Keluarga Sejahtera (KKS)</li>
              <li>Mahasiswa dari panti sosial/panti asuhan</li>
              <li>Mahasiswa dari keluarga yang terkena dampak bencana alam/musibah</li>
              <li>Mahasiswa dari daerah 3T (Terdepan, Terluar, dan Tertinggal)</li>
            </ul>

            <h3>C. Kriteria Akademik</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>IPK minimal 2.75 untuk mahasiswa yang sudah menempuh minimal 2 semester</li>
              <li>Mahasiswa baru: nilai rapor minimal 7.0 atau prestasi akademik lainnya</li>
              <li>Aktif mengikuti perkuliahan dan tidak dalam status cuti akademik</li>
              <li>Tidak memiliki tunggakan akademik yang dapat menghambat studi</li>
            </ul>
          </div>
        </div>

        {/* Required Documents */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card">
            <h2>Dokumen yang Diperlukan</h2>
            
            <h3>A. Dokumen Identitas</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Fotokopi KTP yang masih berlaku</li>
              <li>Fotokopi Kartu Keluarga (KK)</li>
              <li>Fotokopi Akta Kelahiran</li>
              <li>Pas foto terbaru ukuran 3x4 (2 lembar)</li>
            </ul>

            <h3>B. Dokumen Akademik</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Fotokopi ijazah SMA/SMK/MA atau sederajat yang telah dilegalisir</li>
              <li>Fotokopi transkrip nilai atau rapor yang telah dilegalisir</li>
              <li>Surat keterangan aktif kuliah dari fakultas</li>
              <li>Transkrip nilai semester terakhir (untuk mahasiswa lama)</li>
              <li>Surat keterangan tidak menerima beasiswa lain</li>
            </ul>

            <h3>C. Dokumen Ekonomi</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Surat Keterangan Tidak Mampu (SKTM) dari kelurahan/desa</li>
              <li>Fotokopi Kartu Indonesia Pintar (KIP) jika ada</li>
              <li>Fotokopi Kartu Keluarga Sejahtera (KKS) jika ada</li>
              <li>Fotokopi Kartu Program Keluarga Harapan (PKH) jika ada</li>
              <li>Surat keterangan penghasilan orang tua/wali</li>
              <li>Fotokopi rekening listrik 3 bulan terakhir</li>
              <li>Foto rumah tampak depan dan dalam</li>
            </ul>

            <h3>D. Dokumen Tambahan (Jika Ada)</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Surat keterangan yatim/piatu dari kelurahan</li>
              <li>Surat keterangan dari panti asuhan (jika dari panti)</li>
              <li>Surat keterangan terdampak bencana dari BNPB/BPBD</li>
              <li>Surat keterangan disabilitas dari rumah sakit/puskesmas</li>
              <li>Sertifikat prestasi akademik/non-akademik</li>
            </ul>
          </div>
        </div>

        {/* Application Process */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card">
            <h2>Prosedur Pendaftaran</h2>
            
            <div className="card-grid">
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>1. Persiapan Dokumen</h4>
                <p>
                  Siapkan semua dokumen yang diperlukan sesuai dengan daftar di atas. 
                  Pastikan semua dokumen dalam kondisi baik dan terbaca dengan jelas.
                </p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>2. Pendaftaran Online</h4>
                <p>
                  Daftar melalui sistem online KIP Kuliah di website resmi. 
                  Isi formulir dengan data yang benar dan lengkap.
                </p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>3. Upload Dokumen</h4>
                <p>
                  Upload semua dokumen yang diperlukan dalam format PDF atau JPG 
                  dengan ukuran maksimal 2MB per file.
                </p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>4. Verifikasi</h4>
                <p>
                  Tim verifikasi akan memeriksa kelengkapan dan kebenaran dokumen 
                  yang telah disubmit dalam waktu 7-14 hari kerja.
                </p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>5. Pengumuman</h4>
                <p>
                  Hasil seleksi akan diumumkan melalui website resmi dan email. 
                  Pastikan email yang didaftarkan aktif dan dapat diakses.
                </p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>6. Aktivasi</h4>
                <p>
                  Mahasiswa yang diterima harus melakukan aktivasi dan menandatangani 
                  kontrak penerima KIP Kuliah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid var(--error-color)' }}>
            <h2 style={{ color: 'var(--error-color)' }}>Catatan Penting</h2>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Semua dokumen harus asli dan tidak boleh dipalsukan</li>
              <li>Pemalsuan dokumen akan mengakibatkan diskualifikasi permanen</li>
              <li>KIP Kuliah tidak dapat dipindahtangankan kepada orang lain</li>
              <li>Penerima KIP Kuliah wajib menjaga IPK minimal 2.75</li>
              <li>Pelanggaran ketentuan dapat mengakibatkan pencabutan bantuan</li>
              <li>Bantuan diberikan sesuai masa studi normal program studi</li>
            </ul>
          </div>
        </div>

        {/* Contact for Help */}
        <div style={{ maxWidth: '600px', margin: '3rem auto 0' }}>
          <div className="card text-center">
            <h3>Butuh Bantuan?</h3>
            <p>
              Jika Anda memiliki pertanyaan terkait persyaratan atau proses pendaftaran, 
              jangan ragu untuk menghubungi tim KIP Kuliah UIN Jakarta.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/discussion" className="btn-primary">
                Forum Diskusi
              </a>
              <a href="mailto:kipkuliah@uinjkt.ac.id" className="btn-secondary">
                Email: kipkuliah@uinjkt.ac.id
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
