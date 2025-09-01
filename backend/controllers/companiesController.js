const Company = require('../models/Company');

exports.list = async (_req, res) => {
  try {
    const companies = await Company.find().sort('name');
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const c = new Company({ name });
    await c.save();
    res.json(c);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
