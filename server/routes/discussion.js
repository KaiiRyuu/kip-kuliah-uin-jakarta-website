const express = require('express');
const router = express.Router();
const mockDB = require('../data/mockData');

// GET /api/discussion
// Get all public discussion messages
router.get('/', (req, res) => {
  try {
    const { 
      limit = 20, 
      page = 1, 
      category, 
      status, 
      search 
    } = req.query;

    const pageLimit = Math.min(parseInt(limit) || 20, 50);
    const pageNumber = Math.max(parseInt(page) || 1, 1);

    const options = {
      limit: pageLimit,
      page: pageNumber,
      isPublic: true
    };

    // Add category filter
    if (category && category !== 'all') {
      options.category = category;
    }

    // Add status filter
    if (status && status !== 'all') {
      options.status = status;
    }

    // Add search functionality
    if (search && search.trim()) {
      options.search = search.trim();
    }

    const result = mockDB.getAllDiscussions(options);

    res.json({
      success: true,
      data: result.data,
      pagination: {
        current: result.page,
        limit: result.limit,
        total: result.total,
        pages: result.pages,
        hasNext: result.page < result.pages,
        hasPrev: result.page > 1
      }
    });

  } catch (error) {
    console.error('Error fetching discussions:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data diskusi'
    });
  }
});

// POST /api/discussion
// Create a new discussion message
router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    const errors = {};

    if (!name || name.trim().length === 0) {
      errors.name = 'Nama harus diisi';
    } else if (name.trim().length > 100) {
      errors.name = 'Nama tidak boleh lebih dari 100 karakter';
    }

    if (!email || email.trim().length === 0) {
      errors.email = 'Email harus diisi';
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      errors.email = 'Format email tidak valid';
    }

    if (!message || message.trim().length === 0) {
      errors.message = 'Pesan harus diisi';
    } else if (message.trim().length < 10) {
      errors.message = 'Pesan minimal 10 karakter';
    } else if (message.trim().length > 1000) {
      errors.message = 'Pesan tidak boleh lebih dari 1000 karakter';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Data tidak valid',
        errors: errors
      });
    }

    // Create new discussion
    const discussionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    };

    const savedDiscussion = mockDB.createDiscussion(discussionData);

    res.status(201).json({
      success: true,
      data: savedDiscussion,
      message: 'Pertanyaan berhasil dikirim. Tim kami akan segera merespons.'
    });

  } catch (error) {
    console.error('Error creating discussion:', error);

    res.status(500).json({
      success: false,
      message: 'Gagal menyimpan pesan diskusi'
    });
  }
});

// GET /api/discussion/categories
// Get discussion categories with counts
router.get('/categories', (req, res) => {
  try {
    const categories = mockDB.getDiscussionCategories();

    res.json({
      success: true,
      data: categories
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil kategori diskusi'
    });
  }
});

// GET /api/discussion/stats
// Get discussion statistics
router.get('/stats', (req, res) => {
  try {
    const stats = mockDB.getDiscussionStats();

    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error getting discussion stats:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil statistik diskusi'
    });
  }
});

// GET /api/discussion/:id
// Get specific discussion by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const discussion = mockDB.findDiscussionById(id);

    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Diskusi tidak ditemukan'
      });
    }

    if (!discussion.isPublic) {
      return res.status(403).json({
        success: false,
        message: 'Diskusi tidak dapat diakses'
      });
    }

    // Increment views
    mockDB.incrementDiscussionViews(id);

    // Return without email
    const { email, ...publicData } = discussion;

    res.json({
      success: true,
      data: publicData
    });

  } catch (error) {
    console.error('Error fetching discussion:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data diskusi'
    });
  }
});

// POST /api/discussion/:id/like
// Like a discussion message
router.post('/:id/like', (req, res) => {
  try {
    const { id } = req.params;

    const discussion = mockDB.findDiscussionById(id);

    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Diskusi tidak ditemukan'
      });
    }

    if (!discussion.isPublic) {
      return res.status(403).json({
        success: false,
        message: 'Diskusi tidak dapat diakses'
      });
    }

    mockDB.incrementDiscussionLikes(id);

    res.json({
      success: true,
      data: {
        likes: discussion.likes
      },
      message: 'Terima kasih atas like Anda!'
    });

  } catch (error) {
    console.error('Error liking discussion:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal memberikan like'
    });
  }
});

module.exports = router;
