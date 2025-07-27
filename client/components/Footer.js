export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {currentYear} KIP Kuliah UIN Jakarta. Semua hak dilindungi undang-undang.
          </p>
          <p>
            Website resmi informasi KIP Kuliah untuk mahasiswa UIN Syarif Hidayatullah Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
