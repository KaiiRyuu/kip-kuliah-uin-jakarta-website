import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="section">
        <div className="section-title">
          <h1>Tentang Website KIP Kuliah UIN Jakarta</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Portal informasi resmi yang didedikasikan untuk memberikan layanan terbaik 
            kepada mahasiswa penerima dan calon penerima KIP Kuliah di UIN Syarif Hidayatullah Jakarta.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="card-grid">
            <div className="card">
              <h3>🎯 Visi</h3>
              <p>
                Menjadi platform informasi KIP Kuliah yang terpercaya, mudah diakses, 
                dan memberikan pelayanan terbaik untuk mendukung kesuksesan akademik 
                mahasiswa UIN Syarif Hidayatullah Jakarta.
              </p>
            </div>
            
            <div className="card">
              <h3>🚀 Misi</h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Menyediakan informasi KIP Kuliah yang akurat dan terkini</li>
                <li>Memfasilitasi komunikasi antara mahasiswa dan pengelola</li>
                <li>Memberikan layanan pencarian status yang mudah dan cepat</li>
                <li>Menjadi wadah diskusi dan konsultasi seputar KIP Kuliah</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About the Website */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card">
            <h2>Tentang Website Ini</h2>
            <p>
              Website KIP Kuliah UIN Jakarta dikembangkan sebagai respons terhadap kebutuhan 
              mahasiswa akan akses informasi yang mudah dan cepat terkait program Kartu Indonesia 
              Pintar Kuliah. Platform ini dirancang dengan antarmuka yang user-friendly dan 
              fitur-fitur yang mendukung kebutuhan mahasiswa.
            </p>
            
            <h3 className="mt-4">Fitur Utama:</h3>
            <div className="card-grid" style={{ marginTop: '1.5rem' }}>
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>🏠 Beranda</h4>
                <p>Informasi umum dan terkini tentang KIP Kuliah, manfaat, dan syarat-syarat penerima.</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>🔍 Seleksi</h4>
                <p>Fitur pencarian untuk mengecek status pendaftaran KIP Kuliah berdasarkan NIM.</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>📋 Persyaratan</h4>
                <p>Daftar lengkap persyaratan dan dokumen yang diperlukan untuk mendaftar KIP Kuliah.</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
                <h4>💬 Diskusi</h4>
                <p>Forum diskusi untuk bertanya dan mendapatkan jawaban dari perwakilan resmi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* About UIN Jakarta */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card">
            <h2>UIN Syarif Hidayatullah Jakarta</h2>
            <p>
              Universitas Islam Negeri Syarif Hidayatullah Jakarta adalah perguruan tinggi 
              Islam negeri yang berlokasi di Ciputat, Tangerang Selatan, Banten. UIN Jakarta 
              merupakan salah satu universitas Islam terkemuka di Indonesia yang berkomitmen 
              untuk memberikan pendidikan berkualitas tinggi.
            </p>
            
            <div className="card-grid" style={{ marginTop: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-color)' }}>1957</h3>
                <p>Tahun Didirikan</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-color)' }}>12</h3>
                <p>Fakultas</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-color)' }}>40,000+</h3>
                <p>Mahasiswa Aktif</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-color)' }}>2,500+</h3>
                <p>Penerima KIP Kuliah</p>
              </div>
            </div>
          </div>
        </div>

        {/* KIP Kuliah Program */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
            <h2>Program KIP Kuliah di UIN Jakarta</h2>
            <p>
              Program KIP Kuliah di UIN Jakarta telah membantu ribuan mahasiswa dari berbagai 
              latar belakang ekonomi untuk menyelesaikan pendidikan tinggi. Program ini tidak 
              hanya memberikan bantuan finansial, tetapi juga pembinaan karakter dan soft skills 
              melalui FORMABIKIP (Forum Mahasiswa Bidikmisi dan KIP Kuliah).
            </p>
            
            <h3 className="mt-4">Pencapaian Program:</h3>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Tingkat kelulusan tepat waktu mencapai 85%</li>
              <li>95% lulusan mendapatkan pekerjaan dalam 6 bulan setelah lulus</li>
              <li>Berbagai prestasi akademik dan non-akademik di tingkat nasional</li>
              <li>Kontribusi nyata dalam pengembangan masyarakat</li>
            </ul>
          </div>
        </div>

        {/* Team Information */}
        <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
          <div className="card">
            <h2>Tim Pengelola KIP Kuliah UIN Jakarta</h2>
            <p>
              Tim pengelola KIP Kuliah UIN Jakarta terdiri dari dosen dan tenaga kependidikan 
              yang berpengalaman dalam mengelola program beasiswa dan pembinaan mahasiswa. 
              Tim ini berkomitmen untuk memberikan pelayanan terbaik kepada seluruh mahasiswa 
              penerima KIP Kuliah.
            </p>
            
            <div className="card-grid" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ backgroundColor: 'var(--surface-color)', textAlign: 'center' }}>
                <h4>Koordinator Program</h4>
                <p>Bertanggung jawab atas koordinasi keseluruhan program KIP Kuliah</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)', textAlign: 'center' }}>
                <h4>Tim Verifikasi</h4>
                <p>Melakukan verifikasi dokumen dan kelayakan calon penerima</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)', textAlign: 'center' }}>
                <h4>Tim Pembinaan</h4>
                <p>Memberikan pembinaan akademik dan pengembangan soft skills</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--surface-color)', textAlign: 'center' }}>
                <h4>Tim IT</h4>
                <p>Mengelola sistem informasi dan website KIP Kuliah</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{ maxWidth: '600px', margin: '3rem auto 0' }}>
          <div className="card text-center">
            <h2>Hubungi Kami</h2>
            <p>
              Untuk informasi lebih lanjut atau bantuan teknis terkait website ini, 
              silakan hubungi tim KIP Kuliah UIN Jakarta.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <p><strong>Alamat:</strong><br />
              Jl. Ir. H. Juanda No. 95, Ciputat<br />
              Tangerang Selatan, Banten 15412</p>
              
              <p><strong>Email:</strong> kipkuliah@uinjkt.ac.id</p>
              <p><strong>Telepon:</strong> (021) 7401925</p>
              <p><strong>Website UIN Jakarta:</strong> www.uinjkt.ac.id</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="/discussion" className="btn-primary">
                Forum Diskusi
              </a>
              <a href="mailto:kipkuliah@uinjkt.ac.id" className="btn-secondary">
                Email Kami
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
          <div className="card" style={{ backgroundColor: 'rgba(102, 102, 102, 0.05)', border: '1px solid var(--secondary-color)' }}>
            <h3>Disclaimer</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Website ini merupakan platform informasi resmi KIP Kuliah UIN Syarif Hidayatullah Jakarta. 
              Semua informasi yang disajikan telah diverifikasi dan disesuaikan dengan kebijakan terbaru 
              dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Untuk informasi yang bersifat 
              kebijakan nasional, silakan merujuk ke website resmi KIP Kuliah di kip-kuliah.kemdikbud.go.id.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
