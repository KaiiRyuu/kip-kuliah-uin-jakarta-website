import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MessageList({ refreshTrigger }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/discussion');
      setMessages(response.data);
      setError('');
    } catch (err) {
      setError('Gagal memuat pesan diskusi. Silakan coba lagi.');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [refreshTrigger]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRefresh = () => {
    fetchMessages();
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="loading">Memuat pesan diskusi...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-result error">
        <p>{error}</p>
        <button onClick={handleRefresh} className="btn-secondary mt-2">
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h3>Diskusi Terbaru</h3>
        <button onClick={handleRefresh} className="btn-secondary">
          Refresh
        </button>
      </div>

      {messages.length === 0 ? (
        <div className="text-center" style={{ padding: '3rem', color: 'var(--text-secondary)' }}>
          <h4>Belum ada diskusi</h4>
          <p>Jadilah yang pertama mengajukan pertanyaan!</p>
        </div>
      ) : (
        <div className="message-list">
          {messages.map((message) => (
            <div key={message._id} className="message-item">
              <div className="message-header">
                <div className="message-author">
                  {message.name}
                </div>
                <div className="message-date">
                  {formatDate(message.createdAt)}
                </div>
              </div>
              <div className="message-content">
                {message.message}
              </div>
              {message.reply && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '1rem', 
                  backgroundColor: 'var(--surface-color)', 
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--accent-color)'
                }}>
                  <div style={{ 
                    fontWeight: '600', 
                    color: 'var(--accent-color)', 
                    marginBottom: '0.5rem' 
                  }}>
                    Jawaban Admin:
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    {message.reply}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {messages.length > 0 && (
        <div className="text-center mt-4">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Menampilkan {messages.length} pesan diskusi
          </p>
        </div>
      )}
    </div>
  );
}
