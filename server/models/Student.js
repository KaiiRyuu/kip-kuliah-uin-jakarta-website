const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  isRegistered: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  faculty: {
    type: String,
    trim: true
  },
  program: {
    type: String,
    trim: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'graduated', 'dropped'],
    default: 'active'
  },
  gpa: {
    type: Number,
    min: 0,
    max: 4
  },
  semester: {
    type: Number,
    min: 1
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for faster searches
studentSchema.index({ studentId: 1 });
studentSchema.index({ isRegistered: 1 });

// Virtual for full student info
studentSchema.virtual('fullInfo').get(function() {
  return {
    studentId: this.studentId,
    name: this.name,
    isRegistered: this.isRegistered,
    status: this.status,
    registrationDate: this.registrationDate
  };
});

// Method to check if student is eligible
studentSchema.methods.isEligible = function() {
  return this.isRegistered && this.status === 'active' && (!this.gpa || this.gpa >= 2.75);
};

// Static method to find by student ID
studentSchema.statics.findByStudentId = function(studentId) {
  return this.findOne({ studentId: studentId });
};

// Static method to get registered students count
studentSchema.statics.getRegisteredCount = function() {
  return this.countDocuments({ isRegistered: true });
};

// Pre-save middleware to format student ID
studentSchema.pre('save', function(next) {
  if (this.studentId) {
    this.studentId = this.studentId.toString().trim();
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);
