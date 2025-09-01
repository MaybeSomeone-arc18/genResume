const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  keywords: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Role', RoleSchema);
