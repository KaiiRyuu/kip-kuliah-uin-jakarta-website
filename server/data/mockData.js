// Mock data for demonstration purposes
const students = [
  {
    _id: '1',
    studentId: '11180001',
    name: 'Ahmad Fauzi',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Ilmu Tarbiyah dan Keguruan',
    program: 'Pendidikan Agama Islam',
    registrationDate: new Date('2023-01-15'),
    gpa: 3.45,
    semester: 6
  },
  {
    _id: '2',
    studentId: '11180002',
    name: 'Siti Nurhaliza',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Syariah dan Hukum',
    program: 'Hukum Keluarga Islam',
    registrationDate: new Date('2023-01-15'),
    gpa: 3.78,
    semester: 6
  },
  {
    _id: '3',
    studentId: '11180003',
    name: 'Muhammad Rizki',
    isRegistered: false,
    status: 'active',
    faculty: 'Fakultas Ekonomi dan Bisnis',
    program: 'Ekonomi Islam',
    registrationDate: null,
    gpa: 3.12,
    semester: 6
  },
  {
    _id: '4',
    studentId: '11180004',
    name: 'Fatimah Azzahra',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Ushuluddin',
    program: 'Aqidah dan Filsafat Islam',
    registrationDate: new Date('2023-02-01'),
    gpa: 3.89,
    semester: 6
  },
  {
    _id: '5',
    studentId: '11180005',
    name: 'Abdul Rahman',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Adab dan Humaniora',
    program: 'Bahasa dan Sastra Arab',
    registrationDate: new Date('2023-01-20'),
    gpa: 3.56,
    semester: 6
  },
  {
    _id: '6',
    studentId: '11190001',
    name: 'Dewi Sartika',
    isRegistered: false,
    status: 'active',
    faculty: 'Fakultas Dakwah dan Ilmu Komunikasi',
    program: 'Komunikasi dan Penyiaran Islam',
    registrationDate: null,
    gpa: 2.98,
    semester: 4
  },
  {
    _id: '7',
    studentId: '11190002',
    name: 'Budi Santoso',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Sains dan Teknologi',
    program: 'Teknik Informatika',
    registrationDate: new Date('2023-03-10'),
    gpa: 3.67,
    semester: 4
  },
  {
    _id: '8',
    studentId: '11190003',
    name: 'Aisyah Putri',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Psikologi',
    program: 'Psikologi',
    registrationDate: new Date('2023-02-15'),
    gpa: 3.82,
    semester: 4
  },
  {
    _id: '9',
    studentId: '11200001',
    name: 'Hasan Basri',
    isRegistered: true,
    status: 'active',
    faculty: 'Fakultas Kedokteran dan Ilmu Kesehatan',
    program: 'Kedokteran',
    registrationDate: new Date('2023-04-01'),
    gpa: 3.91,
    semester: 2
  },
  {
    _id: '10',
    studentId: '11200002',
    name: 'Khadijah Ummu',
    isRegistered: false,
    status: 'active',
    faculty: 'Fakultas Ilmu Sosial dan Ilmu Politik',
    program: 'Ilmu Politik',
    registrationDate: null,
    gpa: 3.23,
    semester: 2
  }
];

const discussions = [
  {
    _id: '1',
    name: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@mhs.uinjkt.ac.id',
    message: 'Kapan jadwal pencairan KIP Kuliah semester ini? Saya belum menerima informasi resmi dari fakultas.',
    reply: 'Pencairan KIP Kuliah semester genap 2024 dijadwalkan pada minggu ketiga Februari 2024. Informasi detail akan dikirim melalui email resmi mahasiswa.',
    repliedBy: 'Admin KIP Kuliah',
    repliedAt: new Date('2024-01-20T10:30:00Z'),
    status: 'replied',
    priority: 'normal',
    category: 'payment',
    isPublic: true,
    likes: 5,
    views: 23,
    createdAt: new Date('2024-01-18T14:20:00Z')
  },
  {
    _id: '2',
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@mhs.uinjkt.ac.id',
    message: 'Bagaimana cara mengupdate data keluarga jika ada perubahan status ekonomi? Orang tua saya baru saja kehilangan pekerjaan.',
    reply: 'Untuk update data keluarga, silakan kirim dokumen terbaru (surat keterangan tidak bekerja, slip gaji terakhir, dll) ke email kipkuliah@uinjkt.ac.id dengan subject "Update Data - [NIM]".',
    repliedBy: 'Admin KIP Kuliah',
    repliedAt: new Date('2024-01-19T09:15:00Z'),
    status: 'replied',
    priority: 'high',
    category: 'requirements',
    isPublic: true,
    likes: 8,
    views: 34,
    createdAt: new Date('2024-01-18T16:45:00Z')
  },
  {
    _id: '3',
    name: 'Muhammad Rizki',
    email: 'muhammad.rizki@mhs.uinjkt.ac.id',
    message: 'Apakah ada persyaratan khusus untuk mahasiswa transfer yang ingin mendaftar KIP Kuliah? Saya pindah dari universitas lain.',
    status: 'pending',
    priority: 'normal',
    category: 'registration',
    isPublic: true,
    likes: 2,
    views: 15,
    createdAt: new Date('2024-01-19T11:30:00Z')
  },
  {
    _id: '4',
    name: 'Fatimah Azzahra',
    email: 'fatimah.azzahra@mhs.uinjkt.ac.id',
    message: 'IPK saya turun di semester lalu menjadi 2.65. Apa yang harus saya lakukan agar KIP Kuliah tidak dicabut? Saya sangat membutuhkan bantuan ini.',
    reply: 'Jangan khawatir, Anda memiliki kesempatan perbaikan 1 semester. Silakan konsultasi dengan dosen pembimbing akademik dan buat rencana perbaikan IPK. Kirimkan surat pernyataan komitmen perbaikan ke kami.',
    repliedBy: 'Admin KIP Kuliah',
    repliedAt: new Date('2024-01-19T13:45:00Z'),
    status: 'replied',
    priority: 'high',
    category: 'general',
    isPublic: true,
    likes: 12,
    views: 67,
    createdAt: new Date('2024-01-19T08:20:00Z')
  },
  {
    _id: '5',
    name: 'Abdul Rahman',
    email: 'abdul.rahman@mhs.uinjkt.ac.id',
    message: 'Terima kasih untuk program KIP Kuliah ini. Sangat membantu saya dalam menyelesaikan studi. Semoga program ini terus berlanjut.',
    reply: 'Terima kasih atas apresiasinya! Kami senang program ini bermanfaat. Tetap semangat dalam studi dan jangan lupa untuk mempertahankan prestasi akademik.',
    repliedBy: 'Admin KIP Kuliah',
    repliedAt: new Date('2024-01-19T15:20:00Z'),
    status: 'replied',
    priority: 'low',
    category: 'general',
    isPublic: true,
    likes: 15,
    views: 45,
    createdAt: new Date('2024-01-19T14:10:00Z')
  },
  {
    _id: '6',
    name: 'Dewi Sartika',
    email: 'dewi.sartika@mhs.uinjkt.ac.id',
    message: 'Saya belum pernah mendaftar KIP Kuliah sebelumnya. Apakah masih bisa mendaftar di semester 4? Dokumen apa saja yang diperlukan?',
    status: 'pending',
    priority: 'normal',
    category: 'registration',
    isPublic: true,
    likes: 3,
    views: 18,
    createdAt: new Date('2024-01-19T16:30:00Z')
  }
];

// Mock database operations
class MockDatabase {
  constructor() {
    this.students = [...students];
    this.discussions = [...discussions];
    this.nextStudentId = students.length + 1;
    this.nextDiscussionId = discussions.length + 1;
  }

  // Student operations
  findStudentByStudentId(studentId) {
    return this.students.find(student => student.studentId === studentId) || null;
  }

  getAllStudents() {
    return [...this.students];
  }

  getStudentStats() {
    const total = this.students.length;
    const registered = this.students.filter(s => s.isRegistered).length;
    const active = this.students.filter(s => s.isRegistered && s.status === 'active').length;
    const graduated = this.students.filter(s => s.isRegistered && s.status === 'graduated').length;

    return {
      total,
      registered,
      active,
      graduated,
      registrationRate: total > 0 ? Math.round((registered / total) * 100) : 0
    };
  }

  searchStudents(query, limit = 10) {
    const searchQuery = query.toLowerCase();
    return this.students
      .filter(student => 
        student.name.toLowerCase().includes(searchQuery) ||
        student.studentId.toLowerCase().includes(searchQuery)
      )
      .slice(0, limit);
  }

  // Discussion operations
  getAllDiscussions(options = {}) {
    let filtered = [...this.discussions];

    // Filter by public
    if (options.isPublic !== undefined) {
      filtered = filtered.filter(d => d.isPublic === options.isPublic);
    }

    // Filter by category
    if (options.category && options.category !== 'all') {
      filtered = filtered.filter(d => d.category === options.category);
    }

    // Filter by status
    if (options.status && options.status !== 'all') {
      filtered = filtered.filter(d => d.status === options.status);
    }

    // Search
    if (options.search) {
      const searchQuery = options.search.toLowerCase();
      filtered = filtered.filter(d =>
        d.message.toLowerCase().includes(searchQuery) ||
        (d.reply && d.reply.toLowerCase().includes(searchQuery)) ||
        d.name.toLowerCase().includes(searchQuery)
      );
    }

    // Sort by creation date (newest first)
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Pagination
    const limit = Math.min(options.limit || 20, 50);
    const page = Math.max(options.page || 1, 1);
    const skip = (page - 1) * limit;

    return {
      data: filtered.slice(skip, skip + limit),
      total: filtered.length,
      page,
      limit,
      pages: Math.ceil(filtered.length / limit)
    };
  }

  createDiscussion(discussionData) {
    const newDiscussion = {
      _id: this.nextDiscussionId.toString(),
      ...discussionData,
      status: 'pending',
      priority: 'normal',
      category: this.categorizeMessage(discussionData.message),
      isPublic: true,
      likes: 0,
      views: 0,
      createdAt: new Date()
    };

    this.discussions.push(newDiscussion);
    this.nextDiscussionId++;

    // Return without email
    const { email, ...publicData } = newDiscussion;
    return publicData;
  }

  findDiscussionById(id) {
    return this.discussions.find(d => d._id === id) || null;
  }

  incrementDiscussionViews(id) {
    const discussion = this.findDiscussionById(id);
    if (discussion) {
      discussion.views += 1;
    }
    return discussion;
  }

  incrementDiscussionLikes(id) {
    const discussion = this.findDiscussionById(id);
    if (discussion) {
      discussion.likes += 1;
    }
    return discussion;
  }

  getDiscussionCategories() {
    const categoryCount = {};
    this.discussions
      .filter(d => d.isPublic)
      .forEach(d => {
        categoryCount[d.category] = (categoryCount[d.category] || 0) + 1;
      });

    const categoryMap = {
      general: 'Umum',
      registration: 'Pendaftaran',
      payment: 'Pembayaran',
      requirements: 'Persyaratan',
      technical: 'Teknis',
      other: 'Lainnya'
    };

    return Object.entries(categoryCount).map(([key, count]) => ({
      key,
      name: categoryMap[key] || key,
      count
    }));
  }

  getDiscussionStats() {
    const publicDiscussions = this.discussions.filter(d => d.isPublic);
    const total = publicDiscussions.length;
    const pending = publicDiscussions.filter(d => d.status === 'pending').length;
    const replied = publicDiscussions.filter(d => d.status === 'replied').length;

    // Get discussions from last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recent = publicDiscussions.filter(d => new Date(d.createdAt) >= sevenDaysAgo).length;

    return {
      total,
      pending,
      replied,
      recent,
      responseRate: total > 0 ? Math.round((replied / total) * 100) : 0
    };
  }

  categorizeMessage(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('daftar') || msg.includes('registrasi') || msg.includes('pendaftaran')) {
      return 'registration';
    } else if (msg.includes('bayar') || msg.includes('pencairan') || msg.includes('dana')) {
      return 'payment';
    } else if (msg.includes('syarat') || msg.includes('dokumen') || msg.includes('persyaratan')) {
      return 'requirements';
    } else if (msg.includes('website') || msg.includes('sistem') || msg.includes('error')) {
      return 'technical';
    } else {
      return 'general';
    }
  }
}

// Export singleton instance
const mockDB = new MockDatabase();

module.exports = mockDB;
