import { useState } from 'react';
import axios from 'axios';

export default function DiscussionForm({ onMessageSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const response = await axios.post('/api/discussion', formData);
      
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Notify parent component to refresh the message list
      if (onMessageSubmitted) {
        onMessageSubmitted(response.data);
      }

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ 
          general: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="discussion-form">
      <h3 className="mb-3">Ajukan Pertanyaan</h3>
      <p className="mb-4 text-secondary">
        Punya pertanyaan tentang KIP Kuliah? Ajukan pertanyaan Anda di sini dan dapatkan jawaban dari perwakilan resmi.
      </p>

      {success && (
        <div className="search-result success mb-3">
          ✓ Pertanyaan Anda berhasil dikirim! Tim kami akan segera merespons.
        </div>
      )}

      {errors.general && (
        <div className="search-result error mb-3">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            disabled={loading}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email Anda"
            disabled={loading}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Pertanyaan *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan pertanyaan Anda tentang KIP Kuliah..."
            rows="5"
            disabled={loading}
          />
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>

        <button 
          type="submit" 
          className="btn-primary"
          disabled={loading}
        >
          {loading ? <span className="loading">Mengirim...</span> : 'Kirim Pertanyaan'}
        </button>
      </form>
    </div>
  );
}
