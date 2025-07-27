const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/kipkuliah';
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Create sample data if database is empty
    await createSampleData();
    
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

const createSampleData = async () => {
  try {
    const Student = require('../models/Student');
    const Discussion = require('../models/Discussion');
    
    // Check if students already exist
    const studentCount = await Student.countDocuments();
    if (studentCount === 0) {
      console.log('Creating sample student data...');
      
      const sampleStudents = [
        {
          studentId: '11180001',
          name: 'Ahmad Fauzi',
          isRegistered: true
        },
        {
          studentId: '11180002',
          name: 'Siti Nurhaliza',
          isRegistered: true
        },
        {
          studentId: '11180003',
          name: 'Muhammad Rizki',
          isRegistered: false
        },
        {
          studentId: '11180004',
          name: 'Fatimah Azzahra',
          isRegistered: true
        },
        {
          studentId: '11180005',
          name: 'Abdul Rahman',
          isRegistered: true
        },
        {
          studentId: '11190001',
          name: 'Dewi Sartika',
          isRegistered: false
        },
        {
          studentId: '11190002',
          name: 'Budi Santoso',
          isRegistered: true
        },
        {
          studentId: '11190003',
          name: 'Aisyah Putri',
          isRegistered: true
        },
        {
          studentId: '11200001',
          name: 'Hasan Basri',
          isRegistered: true
        },
        {
          studentId: '11200002',
          name: 'Khadijah Ummu',
          isRegistered: false
        }
      ];
      
      await Student.insertMany(sampleStudents);
      console.log('Sample student data created successfully');
    }
    
    // Check if discussions already exist
    const discussionCount = await Discussion.countDocuments();
    if (discussionCount === 0) {
      console.log('Creating sample discussion data...');
      
      const sampleDiscussions = [
        {
          name: 'Ahmad Fauzi',
          email: 'ahmad.fauzi@mhs.uinjkt.ac.id',
          message: 'Kapan jadwal pencairan KIP Kuliah semester ini? Saya belum menerima informasi resmi.',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
        },
        {
          name: 'Siti Nurhaliza',
          email: 'siti.nurhaliza@mhs.uinjkt.ac.id',
          message: 'Bagaimana cara mengupdate data keluarga jika ada perubahan status ekonomi?',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
        },
        {
          name: 'Muhammad Rizki',
          email: 'muhammad.rizki@mhs.uinjkt.ac.id',
          message: 'Apakah ada persyaratan khusus untuk mahasiswa transfer yang ingin mendaftar KIP Kuliah?',
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000) // 12 hours ago
        },
        {
          name: 'Fatimah Azzahra',
          email: 'fatimah.azzahra@mhs.uinjkt.ac.id',
          message: 'IPK saya turun di semester lalu menjadi 2.65. Apa yang harus saya lakukan agar KIP Kuliah tidak dicabut?',
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
        },
        {
          name: 'Abdul Rahman',
          email: 'abdul.rahman@mhs.uinjkt.ac.id',
          message: 'Terima kasih untuk program KIP Kuliah ini. Sangat membantu saya dalam menyelesaikan studi.',
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
        }
      ];
      
      await Discussion.insertMany(sampleDiscussions);
      console.log('Sample discussion data created successfully');
    }
    
  } catch (error) {
    console.error('Error creating sample data:', error.message);
  }
};

module.exports = connectDB;
