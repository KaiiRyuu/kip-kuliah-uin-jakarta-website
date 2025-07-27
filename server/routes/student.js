const express = require('express');
const router = express.Router();
const mockDB = require('../data/mockData');

// GET /api/student?studentID=<id>
// Check if student ID exists and is registered for KIP Kuliah
router.get('/', async (req, res) => {
  try {
    const { studentID } = req.query;

    // Validate input
    if (!studentID) {
      return res.status(400).json({
        success: false,
        message: 'Nomor Induk Mahasiswa (NIM) harus diisi'
      });
    }

    // Clean and validate student ID format
    const cleanStudentId = studentID.toString().trim();
    
    if (cleanStudentId.length < 6 || cleanStudentId.length > 15) {
      return res.status(400).json({
        success: false,
        message: 'Format NIM tidak valid. NIM harus terdiri dari 6-15 karakter'
      });
    }

    // Search for student in mock database
    const student = mockDB.findStudentByStudentId(cleanStudentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'NIM tidak ditemukan dalam database KIP Kuliah UIN Jakarta'
      });
    }

    // Return student information
    res.json({
      success: true,
      data: {
        studentId: student.studentId,
        name: student.name,
        isRegistered: student.isRegistered,
        status: student.status,
        registrationDate: student.registrationDate,
        faculty: student.faculty || 'Tidak tersedia',
        program: student.program || 'Tidak tersedia'
      },
      message: student.isRegistered 
        ? 'Mahasiswa terdaftar sebagai penerima KIP Kuliah' 
        : 'Mahasiswa belum terdaftar sebagai penerima KIP Kuliah'
    });

  } catch (error) {
    console.error('Error in student search:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server. Silakan coba lagi nanti.'
    });
  }
});

// GET /api/student/stats
// Get statistics about KIP Kuliah students
router.get('/stats', (req, res) => {
  try {
    const stats = mockDB.getStudentStats();

    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error getting student stats:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil statistik mahasiswa'
    });
  }
});

// POST /api/student/verify
// Verify multiple student IDs at once (for admin use)
router.post('/verify', (req, res) => {
  try {
    const { studentIds } = req.body;

    if (!studentIds || !Array.isArray(studentIds)) {
      return res.status(400).json({
        success: false,
        message: 'Daftar NIM harus berupa array'
      });
    }

    if (studentIds.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Maksimal 50 NIM dapat diverifikasi sekaligus'
      });
    }

    const results = [];
    
    for (const studentId of studentIds) {
      const cleanStudentId = studentId.toString().trim();
      const student = mockDB.findStudentByStudentId(cleanStudentId);
      
      results.push({
        studentId: cleanStudentId,
        found: !!student,
        isRegistered: student ? student.isRegistered : false,
        name: student ? student.name : null
      });
    }

    res.json({
      success: true,
      data: results,
      summary: {
        total: results.length,
        found: results.filter(r => r.found).length,
        registered: results.filter(r => r.isRegistered).length
      }
    });

  } catch (error) {
    console.error('Error in bulk verification:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan dalam verifikasi massal'
    });
  }
});

// GET /api/student/search
// Search students by name or partial student ID (for admin use)
router.get('/search', (req, res) => {
  try {
    const { q, limit = 10 } = req.query;

    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Query pencarian minimal 2 karakter'
      });
    }

    const searchQuery = q.trim();
    const searchLimit = Math.min(parseInt(limit) || 10, 50);

    const students = mockDB.searchStudents(searchQuery, searchLimit);

    res.json({
      success: true,
      data: students.map(student => ({
        studentId: student.studentId,
        name: student.name,
        isRegistered: student.isRegistered,
        status: student.status,
        faculty: student.faculty,
        program: student.program
      })),
      count: students.length
    });

  } catch (error) {
    console.error('Error in student search:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal melakukan pencarian mahasiswa'
    });
  }
});

module.exports = router;
