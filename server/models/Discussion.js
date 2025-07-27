const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama harus diisi'],
    trim: true,
    maxlength: [100, 'Nama tidak boleh lebih dari 100 karakter']
  },
  email: {
    type: String,
    required: [true, 'Email harus diisi'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Format email tidak valid']
  },
  message: {
    type: String,
    required: [true, 'Pesan harus diisi'],
    trim: true,
    minlength: [10, 'Pesan minimal 10 karakter'],
    maxlength: [1000, 'Pesan tidak boleh lebih dari 1000 karakter']
  },
  reply: {
    type: String,
    trim: true,
    maxlength: [1000, 'Balasan tidak boleh lebih dari 1000 karakter']
  },
  repliedBy: {
    type: String,
    trim: true
  },
  repliedAt: {
    type: Date
  },
  status: {
    type: String,
    enum: ['pending', 'replied', 'closed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'normal', 'high', 'urgent'],
    default: 'normal'
  },
  category: {
    type: String,
    enum: ['general', 'registration', 'payment', 'requirements', 'technical', 'other'],
    default: 'general'
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for faster searches and sorting
discussionSchema.index({ createdAt: -1 });
discussionSchema.index({ status: 1 });
discussionSchema.index({ category: 1 });
discussionSchema.index({ email: 1 });

// Virtual for reply status
discussionSchema.virtual('hasReply').get(function() {
  return !!this.reply;
});

// Virtual for formatted date
discussionSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Method to add reply
discussionSchema.methods.addReply = function(replyText, repliedBy = 'Admin') {
  this.reply = replyText;
  this.repliedBy = repliedBy;
  this.repliedAt = new Date();
  this.status = 'replied';
  return this.save();
};

// Method to increment views
discussionSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Method to increment likes
discussionSchema.methods.incrementLikes = function() {
  this.likes += 1;
  return this.save();
};

// Static method to get recent discussions
discussionSchema.statics.getRecent = function(limit = 10) {
  return this.find({ isPublic: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .select('-email'); // Don't expose email addresses in public view
};

// Static method to get discussions by category
discussionSchema.statics.getByCategory = function(category, limit = 10) {
  return this.find({ category: category, isPublic: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .select('-email');
};

// Static method to get pending discussions (for admin)
discussionSchema.statics.getPending = function() {
  return this.find({ status: 'pending' })
    .sort({ createdAt: -1 });
};

// Static method to search discussions
discussionSchema.statics.search = function(query, limit = 10) {
  return this.find({
    $and: [
      { isPublic: true },
      {
        $or: [
          { message: { $regex: query, $options: 'i' } },
          { reply: { $regex: query, $options: 'i' } },
          { name: { $regex: query, $options: 'i' } }
        ]
      }
    ]
  })
  .sort({ createdAt: -1 })
  .limit(limit)
  .select('-email');
};

// Pre-save middleware to auto-categorize based on message content
discussionSchema.pre('save', function(next) {
  if (this.isNew && !this.category) {
    const message = this.message.toLowerCase();
    
    if (message.includes('daftar') || message.includes('registrasi') || message.includes('pendaftaran')) {
      this.category = 'registration';
    } else if (message.includes('bayar') || message.includes('pencairan') || message.includes('dana')) {
      this.category = 'payment';
    } else if (message.includes('syarat') || message.includes('dokumen') || message.includes('persyaratan')) {
      this.category = 'requirements';
    } else if (message.includes('website') || message.includes('sistem') || message.includes('error')) {
      this.category = 'technical';
    } else {
      this.category = 'general';
    }
  }
  
  // Auto-set priority based on keywords
  if (this.isNew && this.priority === 'normal') {
    const message = this.message.toLowerCase();
    
    if (message.includes('urgent') || message.includes('segera') || message.includes('penting')) {
      this.priority = 'high';
    } else if (message.includes('terima kasih') || message.includes('saran')) {
      this.priority = 'low';
    }
  }
  
  next();
});

// Post-save middleware to log new discussions
discussionSchema.post('save', function(doc) {
  if (doc.isNew) {
    console.log(`New discussion created: ${doc.name} - ${doc.category}`);
  }
});

module.exports = mongoose.model('Discussion', discussionSchema);
