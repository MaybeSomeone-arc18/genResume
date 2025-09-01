const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (_req, res) => res.json({ ok: true, message: 'GenResume API' }));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/resumes', require('./routes/resumes'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/companies', require('./routes/companies'));

app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
