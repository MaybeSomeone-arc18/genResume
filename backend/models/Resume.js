const mongoose = require('mongoose');
const ResumeSchema = new mongoose.Schema({
  title: { type: String, default: 'My Resume' },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', default: null },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', default: null },
  data: { type: Object, default: {} },
  pdfUrl: { type: String, default: '' },
  atsScore: { type: Number, default: 0 },
  suggestions: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
ResumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});
module.exports = mongoose.model('Resume', ResumeSchema);
