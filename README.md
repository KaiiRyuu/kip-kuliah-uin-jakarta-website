# KIP Kuliah UIN Jakarta - Information Website

Portal informasi resmi Kartu Indonesia Pintar Kuliah untuk mahasiswa UIN Syarif Hidayatullah Jakarta. Website ini menyediakan layanan informasi, pencarian status pendaftaran, dan forum diskusi untuk mahasiswa penerima KIP Kuliah.

## 🚀 Fitur Utama

- **Beranda**: Informasi umum tentang KIP Kuliah dan manfaatnya
- **Seleksi**: Pencarian status pendaftaran berdasarkan NIM
- **Persyaratan**: Daftar lengkap syarat dan dokumen yang diperlukan
- **Diskusi**: Forum tanya jawab dengan perwakilan resmi
- **Tentang**: Informasi tentang website dan tim pengelola

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js** - React framework untuk production
- **React** - Library JavaScript untuk UI
- **Axios** - HTTP client untuk API calls
- **CSS3** - Styling dengan custom CSS dan Google Fonts

### Backend
- **Express.js** - Web framework untuk Node.js
- **MongoDB** - Database NoSQL
- **Mongoose** - ODM untuk MongoDB
- **CORS** - Cross-Origin Resource Sharing

## 📋 Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (versi 16 atau lebih baru)
- **MongoDB** (versi 4.4 atau lebih baru)
- **npm** atau **yarn**

## 🔧 Instalasi dan Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/kip-kuliah-website.git
cd kip-kuliah-website
```

### 2. Setup Backend (Server)

```bash
# Masuk ke direktori server
cd server

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit file .env sesuai konfigurasi Anda
# MONGO_URI=mongodb://localhost:27017/kipkuliah
# PORT=5000
# NODE_ENV=development
# CLIENT_URL=http://localhost:3000
```

### 3. Setup Frontend (Client)

```bash
# Masuk ke direktori client
cd ../client

# Install dependencies
npm install
```

### 4. Setup Database

Pastikan MongoDB berjalan di sistem Anda:

```bash
# Untuk macOS dengan Homebrew
brew services start mongodb-community

# Untuk Ubuntu/Debian
sudo systemctl start mongod

# Untuk Windows
net start MongoDB
```

Database dan sample data akan dibuat otomatis saat server pertama kali dijalankan.

## 🚀 Menjalankan Aplikasi

### Development Mode

Buka 2 terminal terpisah:

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
# Server akan berjalan di http://localhost:5000
```

**Terminal 2 - Frontend Client:**
```bash
cd client
npm run dev
# Client akan berjalan di http://localhost:3000
```

### Production Mode

**Build dan jalankan backend:**
```bash
cd server
npm start
```

**Build dan jalankan frontend:**
```bash
cd client
npm run build
npm start
```

## 📁 Struktur Proyek

```
kip-kuliah-website/
├── client/                 # Frontend Next.js
│   ├── components/         # React components
│   │   ├── Layout.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SearchForm.js
│   │   ├── DiscussionForm.js
│   │   └── MessageList.js
│   ├── pages/             # Next.js pages
│   │   ├── index.js       # Home page
│   │   ├── selection.js   # Selection page
│   │   ├── requirements.js # Requirements page
│   │   ├── discussion.js  # Discussion page
│   │   ├── about.js       # About page
│   │   └── _app.js        # App configuration
│   ├── styles/            # CSS files
│   │   ├── globals.css
│   │   └── layout.css
│   ├── package.json
│   └── next.config.js
├── server/                # Backend Express.js
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── models/
│   │   ├── Student.js     # Student model
│   │   └── Discussion.js  # Discussion model
│   ├── routes/
│   │   ├── student.js     # Student routes
│   │   └── discussion.js  # Discussion routes
│   ├── app.js             # Main application file
│   ├── package.json
│   ├── .env               # Environment variables
│   └── .env.example       # Environment template
└── README.md
```

## 🔌 API Endpoints

### Student Endpoints
- `GET /api/student?studentID=<id>` - Cek status mahasiswa
- `GET /api/student/stats` - Statistik mahasiswa
- `POST /api/student/verify` - Verifikasi multiple NIM
- `GET /api/student/search` - Pencarian mahasiswa

### Discussion Endpoints
- `GET /api/discussion` - Ambil semua diskusi
- `POST /api/discussion` - Buat diskusi baru
- `GET /api/discussion/categories` - Kategori diskusi
- `GET /api/discussion/stats` - Statistik diskusi
- `GET /api/discussion/:id` - Diskusi spesifik
- `POST /api/discussion/:id/like` - Like diskusi

### Utility Endpoints
- `GET /health` - Health check
- `GET /` - API information

## 📊 Sample Data

Server akan otomatis membuat sample data saat pertama kali dijalankan:

**Sample Students:**
- NIM: 11180001, Nama: Ahmad Fauzi (Terdaftar)
- NIM: 11180002, Nama: Siti Nurhaliza (Terdaftar)
- NIM: 11180003, Nama: Muhammad Rizki (Belum Terdaftar)
- Dan lainnya...

**Sample Discussions:**
- Pertanyaan tentang jadwal pencairan
- Pertanyaan tentang update data keluarga
- Pertanyaan tentang mahasiswa transfer
- Dan lainnya...

## 🎨 Desain dan UI

Website menggunakan desain modern dengan:
- **Typography**: Google Fonts (Inter)
- **Color Scheme**: Hitam, putih, dan biru sebagai accent
- **Layout**: Responsive design untuk semua device
- **Components**: Clean dan minimalist tanpa icon library
- **Animations**: Subtle hover effects dan transitions

## 🔒 Keamanan

- Input validation pada frontend dan backend
- Rate limiting untuk mencegah spam
- CORS configuration
- Environment variables untuk sensitive data
- Error handling yang comprehensive

## 🧪 Testing

Untuk menguji aplikasi:

1. **Test Backend API:**
```bash
# Health check
curl http://localhost:5000/health

# Test student search
curl "http://localhost:5000/api/student?studentID=11180001"

# Test discussion list
curl http://localhost:5000/api/discussion
```

2. **Test Frontend:**
- Buka http://localhost:3000
- Test semua halaman dan fitur
- Test responsive design di berbagai device

## 📝 Kustomisasi

### Menambah Data Mahasiswa

Edit file `server/config/db.js` pada bagian `createSampleData()` untuk menambah data mahasiswa.

### Mengubah Styling

Edit file CSS di `client/styles/` untuk mengubah tampilan website.

### Menambah Fitur

1. Buat model baru di `server/models/`
2. Buat routes baru di `server/routes/`
3. Daftarkan routes di `server/app.js`
4. Buat components dan pages baru di client

## 🚀 Deployment

### Backend Deployment
1. Setup MongoDB Atlas atau MongoDB server
2. Update MONGO_URI di environment variables
3. Deploy ke Heroku, Vercel, atau platform lainnya

### Frontend Deployment
1. Update API URLs di next.config.js
2. Build aplikasi: `npm run build`
3. Deploy ke Vercel, Netlify, atau platform lainnya

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Untuk bantuan dan pertanyaan:
- **Email**: kipkuliah@uinjkt.ac.id
- **Telepon**: (021) 7401925
- **Alamat**: Jl. Ir. H. Juanda No. 95, Ciputat, Tangerang Selatan

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Tim Pengembang

- **Frontend Developer**: [Your Name]
- **Backend Developer**: [Your Name]
- **UI/UX Designer**: [Your Name]
- **Project Manager**: Tim KIP Kuliah UIN Jakarta

---

**© 2024 KIP Kuliah UIN Jakarta. All rights reserved.**
