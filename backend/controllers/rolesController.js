const Role = require('../models/Role');

exports.list = async (_req, res) => {
  try {
    const roles = await Role.find().sort('name');
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, slug, keywords } = req.body;
    const r = new Role({ name, slug, keywords: keywords || [] });
    await r.save();
    res.json(r);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
