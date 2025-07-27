import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          KIP Kuliah UIN Jakarta
        </h1>
        <p className="hero-subtitle">
          Portal Informasi Resmi Kartu Indonesia Pintar Kuliah untuk Mahasiswa 
          UIN Syarif Hidayatullah Jakarta
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/selection" className="btn-primary">
            Cek Status Pendaftaran
          </Link>
          <Link href="/requirements" className="btn-secondary">
            Lihat Persyaratan
          </Link>
        </div>
      </section>

      {/* About KIP Kuliah Section */}
      <section className="section">
        <div className="section-title">
          <h2>Apa itu KIP Kuliah?</h2>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <h3>Program Bantuan Pendidikan</h3>
            <p>
              KIP Kuliah adalah program bantuan biaya pendidikan dari Pemerintah Indonesia 
              yang diberikan kepada lulusan Sekolah Menengah Atas (SMA) atau sederajat 
              yang memiliki potensi akademik baik namun memiliki keterbatasan ekonomi.
            </p>
          </div>
          
          <div className="card">
            <h3>Tujuan Program</h3>
            <p>
              Program ini bertujuan untuk memberikan kesempatan kepada siswa-siswi 
              berprestasi dari keluarga kurang mampu untuk dapat melanjutkan pendidikan 
              ke jenjang perguruan tinggi dengan biaya yang ditanggung pemerintah.
            </p>
          </div>
          
          <div className="card">
            <h3>Cakupan Bantuan</h3>
            <p>
              KIP Kuliah mencakup biaya pendidikan (SPP) dan biaya hidup untuk
              penunjang akademik selama masa studi normal sesuai dengan 
              program studi yang diambil.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Manfaat KIP Kuliah</h2>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <h4>💰 Bantuan Biaya Kuliah</h4>
              <p>
                Pembebasan biaya kuliah (SPP) selama masa studi normal sesuai 
                dengan ketentuan program studi masing-masing.
              </p>
            </div>
            
            <div className="card">
              <h4>🏠 Bantuan Biaya Hidup</h4>
              <p>
                Bantuan biaya hidup bulanan untuk membantu kebutuhan sehari-hari 
                selama menempuh pendidikan di perguruan tinggi.
              </p>
            </div>
            
            <div className="card">
              <h4>📚 Bantuan Biaya Akademik</h4>
              <p>
                Bantuan untuk kebutuhan akademik seperti buku, alat tulis, 
                dan keperluan penunjang pembelajaran lainnya.
              </p>
            </div>
            
            <div className="card">
              <h4>🎓 Pembinaan Soft Skills</h4>
              <p>
                Program pembinaan dan pengembangan soft skills untuk meningkatkan 
                kualitas dan daya saing lulusan di dunia kerja melalui program kerja FORMABIKIP UIN Jakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section">
        <div className="section-title">
          <h2>Syarat Umum Penerima KIP Kuliah</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card">
            <h3>Kriteria Utama:</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Mahasiswa Disabilitas</li>
              <li>Mahasiswa UKT Golongan 1,2 dan 3</li>
              <li>Mahasiswa Terdampak Covid-19</li>
              <li>Memiliki Kartu Indonesia Pintar (KIP) atau memenuhi persyaratan untuk mendapatkan KIP Kuliah</li>
            </ul>
            
            <h3 className="mt-4">Prioritas Khusus:</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Pemegang Kartu Indonesia Pintar (KIP)</li>
              <li>Mahasiswa dari keluarga peserta Program Keluarga Harapan (PKH)</li>
              <li>Mahasiswa dari keluarga pemegang Kartu Keluarga Sejahtera (KKS)</li>
              <li>Mahasiswa dari panti sosial/panti asuhan</li>
              <li>Mahasiswa dari keluarga yang terkena dampak bencana alam/musibah</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Layanan Kami</h2>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <h3>🔍 Cek Status Pendaftaran</h3>
              <p>
                Periksa apakah NIM Anda sudah terdaftar dalam database 
                penerima KIP Kuliah UIN Jakarta.
              </p>
              <Link href="/selection" className="btn-primary mt-2">
                Cek Sekarang
              </Link>
            </div>
            
            <div className="card">
              <h3>📋 Persyaratan Lengkap</h3>
              <p>
                Pelajari semua persyaratan dan dokumen yang diperlukan 
                untuk mendaftar KIP Kuliah.
              </p>
              <Link href="/requirements" className="btn-primary mt-2">
                Lihat Persyaratan
              </Link>
            </div>
            
            <div className="card">
              <h3>💬 Forum Diskusi</h3>
              <p>
                Ajukan pertanyaan dan dapatkan jawaban langsung dari 
                perwakilan resmi KIP Kuliah.
              </p>
              <Link href="/discussion" className="btn-primary mt-2">
                Mulai Diskusi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="section-title">
          <h2>Informasi Kontak</h2>
        </div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div className="card">
            <h3>Tim KIP Kuliah UIN Jakarta</h3>
            <p><strong>Alamat:</strong> Jl. Ir. H. Juanda No. 95, Ciputat, Tangerang Selatan, Banten 15412</p>
            <p><strong>Email:</strong> kipkuliah@uinjkt.ac.id</p>
            <p><strong>Telepon:</strong> (021) 7401925</p>
            <p><strong>Jam Layanan:</strong> Senin - Jumat, 08:00 - 16:00 WIB</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
