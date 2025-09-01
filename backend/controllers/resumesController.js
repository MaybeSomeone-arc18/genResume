const Resume = require('../models/Resume');

exports.list = async (_req, res) => {
  try {
    const list = await Resume.find().sort('-createdAt').limit(100);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const r = await Resume.findById(req.params.id);
    if (!r) return res.status(404).json({ error: 'Not found' });
    res.json(r);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const r = await Resume.findById(req.params.id);
    if (!r) return res.status(404).json({ error: 'Not found' });
    r.title = req.body.title ?? r.title;
    r.roleId = req.body.roleId ?? r.roleId;
    r.companyId = req.body.companyId ?? r.companyId;
    r.data = req.body.data ?? r.data;
    r.atsScore = req.body.atsScore ?? r.atsScore;
    r.suggestions = req.body.suggestions ?? r.suggestions;
    await r.save();
    res.json(r);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const r = await Resume.findById(req.params.id);
    if (!r) return res.status(404).json({ error: 'Not found' });
    await r.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
