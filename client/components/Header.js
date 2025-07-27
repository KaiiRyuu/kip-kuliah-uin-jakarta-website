import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link href="/" className="logo">
            KIP Kuliah UIN Jakarta
          </Link>
          
          <nav className="nav">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Beranda
            </Link>
            <Link 
              href="/selection" 
              className={`nav-link ${isActive('/selection') ? 'active' : ''}`}
            >
              Seleksi
            </Link>
            <Link 
              href="/requirements" 
              className={`nav-link ${isActive('/requirements') ? 'active' : ''}`}
            >
              Persyaratan
            </Link>
            <Link 
              href="/discussion" 
              className={`nav-link ${isActive('/discussion') ? 'active' : ''}`}
            >
              Diskusi
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              Tentang
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
