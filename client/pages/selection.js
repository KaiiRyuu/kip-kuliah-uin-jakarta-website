import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

export default function Selection() {
  return (
    <Layout>
      <section className="section">
        <div className="section-title">
          <h1>Seleksi KIP Kuliah</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Gunakan fitur pencarian di bawah ini untuk mengecek status pendaftaran KIP Kuliah Anda. 
            Masukkan Nomor Induk Mahasiswa (NIM) untuk melihat apakah Anda terdaftar dalam database 
            penerima KIP Kuliah UIN Jakarta.
          </p>
        </div>

        <SearchForm />

        {/* Information Section */}
        <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
          <div className="card">
            <h3>Informasi Penting</h3>
            <div style={{ textAlign: 'left' }}>
              <h4>Cara Menggunakan Fitur Pencarian:</h4>
              <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li>Masukkan NIM (Nomor Induk Mahasiswa) Anda dengan benar</li>
                <li>Klik tombol "Cari" untuk memulai pencarian</li>
                <li>Sistem akan menampilkan status pendaftaran Anda</li>
                <li>Jika data tidak ditemukan, pastikan NIM yang dimasukkan sudah benar</li>
              </ol>

              <h4>Status yang Mungkin Muncul:</h4>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li><strong>Terdaftar:</strong> NIM Anda sudah terdaftar sebagai penerima KIP Kuliah</li>
                <li><strong>Belum Terdaftar:</strong> NIM Anda belum terdaftar dalam database</li>
                <li><strong>Data Tidak Ditemukan:</strong> NIM tidak ditemukan dalam sistem</li>
              </ul>

              <h4>Jika Mengalami Masalah:</h4>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Pastikan NIM yang dimasukkan sudah benar dan sesuai format</li>
                <li>Coba refresh halaman dan lakukan pencarian ulang</li>
                <li>Hubungi admin KIP Kuliah UIN Jakarta jika masalah berlanjut</li>
                <li>Gunakan fitur diskusi untuk mengajukan pertanyaan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
          <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
            <h3>Butuh Bantuan?</h3>
            <p>
              Jika Anda mengalami kesulitan dalam menggunakan fitur pencarian atau memiliki 
              pertanyaan terkait status KIP Kuliah Anda, jangan ragu untuk menghubungi kami.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/discussion" className="btn-primary">
                Forum Diskusi
              </a>
              <a href="mailto:kipkuliah@uinjkt.ac.id" className="btn-secondary">
                Email Admin
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
          <h3 className="text-center mb-3">Statistik KIP Kuliah UIN Jakarta</h3>
          <div className="card-grid">
            <div className="card text-center">
              <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>2,500+</h2>
              <p>Mahasiswa Penerima KIP Kuliah</p>
            </div>
            <div className="card text-center">
              <h2 style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>95%</h2>
              <p>Tingkat Keberhasilan Program</p>
            </div>
            <div className="card text-center">
              <h2 style={{ color: 'var(--warning-color)', marginBottom: '0.5rem' }}>12</h2>
              <p>Fakultas Terlibat</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
