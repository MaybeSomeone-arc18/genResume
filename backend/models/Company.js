const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  meta: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Company', CompanySchema);
