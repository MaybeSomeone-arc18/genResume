const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const ctrl = require('../controllers/uploadController');

router.post('/', upload.single('file'), ctrl.upload);

module.exports = router;
