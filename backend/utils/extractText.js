const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = fs.readFileSync(filePath);
  if (ext === '.pdf') {
    const data = await pdfParse(buffer);
    return data.text || '';
  }
  if (ext === '.docx') {
    const { value } = await mammoth.extractRawText({ buffer });
    return value || '';
  }
  return buffer.toString('utf8');
}
module.exports = extractText;
