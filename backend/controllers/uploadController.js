const extractText = require('../utils/extractText');
const { scoreResume, generateSuggestions } = require('../utils/ats');
const Resume = require('../models/Resume');
const Role = require('../models/Role');

exports.upload = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded (field name must be "file")' });
    const filePath = req.file.path;
    const text = await extractText(filePath);

    let roleKeywords = [];
    if (req.body.roleId) {
      const role = await Role.findById(req.body.roleId);
      if (role) roleKeywords = role.keywords;
    }

    const atsScore = scoreResume(text, roleKeywords);
    const suggestions = generateSuggestions(text, roleKeywords);

    const resume = new Resume({
      title: req.body.title || req.file.originalname,
      roleId: req.body.roleId || null,
      companyId: req.body.companyId || null,
      data: { text },
      pdfUrl: `/uploads/${req.file.filename}`,
      atsScore,
      suggestions
    });

    await resume.save();
    res.json({
      ok: true,
      resumeId: resume._id,
      pdfUrl: resume.pdfUrl,
      text,
      data: resume.data,
      atsScore,
      suggestions
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
