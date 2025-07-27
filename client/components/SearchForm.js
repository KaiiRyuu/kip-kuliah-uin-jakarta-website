import { useState } from 'react';
import axios from 'axios';

export default function SearchForm() {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!studentId.trim()) {
      setError('Nomor Induk Mahasiswa harus diisi');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.get(`/api/student?studentID=${studentId}`);
      setResult(response.data);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Terjadi kesalahan saat mencari data');
      } else {
        setError('Tidak dapat terhubung ke server. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStudentId('');
    setResult(null);
    setError('');
  };

  return (
    <div className="search-container">
      <div className="card">
        <h3 className="text-center mb-3">Cek Status Pendaftaran KIP Kuliah</h3>
        <p className="text-center mb-4">
          Masukkan Nomor Induk Mahasiswa (NIM) untuk mengecek status pendaftaran KIP Kuliah Anda
        </p>

        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-group">
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Masukkan NIM Anda"
              className="search-input"
              disabled={loading}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
            >
              {loading ? <span className="loading">Mencari...</span> : 'Cari'}
            </button>
            
            <button 
              type="button" 
              onClick={handleReset}
              className="btn-secondary"
              disabled={loading}
            >
              Reset
            </button>
          </div>
        </form>

        {error && (
          <div className="search-result error">
            {error}
          </div>
        )}

        {result && (
          <div className={`search-result ${result.success ? 'success' : 'error'}`}>
            {result.success ? (
              <div>
                <h4>✓ Data Ditemukan</h4>
                <p><strong>Nama:</strong> {result.data.name}</p>
                <p><strong>NIM:</strong> {result.data.studentId}</p>
                <p><strong>Status:</strong> {result.data.isRegistered ? 'Terdaftar KIP Kuliah' : 'Belum Terdaftar'}</p>
              </div>
            ) : (
              <div>
                <h4>✗ Data Tidak Ditemukan</h4>
                <p>NIM yang Anda masukkan tidak terdaftar dalam database KIP Kuliah.</p>
                <p>Silakan periksa kembali NIM Anda atau hubungi admin untuk informasi lebih lanjut.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
