function scoreResume(text = '', roleKeywords = []) {
    const lower = (text || '').toLowerCase();
    let score = 0;
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(text)) score += 10;
    if (/\+?\d[\d\s\-]{6,}\d/.test(text)) score += 10;
  
    const sections = ['education', 'experience', 'skills', 'projects', 'summary', 'certifications'];
    score += Math.min(30, sections.reduce((acc, s) => acc + (lower.includes(s) ? 1 : 0), 0) * 6);
  
    if (Array.isArray(roleKeywords) && roleKeywords.length) {
      const matches = roleKeywords.reduce((acc, k) => acc + (lower.includes(k.toLowerCase()) ? 1 : 0), 0);
      score += Math.round((matches / roleKeywords.length) * 40);
    } else {
      const generic = ['javascript','react','node','python','sql','java'];
      score += Math.min(20, generic.reduce((a, k) => a + (lower.includes(k) ? 1 : 0), 0) * 5);
    }
  
    const words = lower.split(/\s+/).filter(Boolean).length;
    if (words < 200) score -= 10;
    if (words > 2000) score -= 5;
  
    score = Math.max(0, Math.min(100, Math.round(score)));
    return score;
  }
  
  function generateSuggestions(text = '', roleKeywords = []) {
    const lower = (text || '').toLowerCase();
    const suggestions = [];
    if (!/\b(education|degree|university|college)\b/.test(lower)) {
      suggestions.push({ type: 'section', text: 'Add an Education section with degree and year.' });
    }
    if (!/\b(experience|work experience|professional experience)\b/.test(lower)) {
      suggestions.push({ type: 'section', text: 'Add an Experience section describing roles and responsibilities.' });
    }
    if (!/\b(skills|technical skills|technologies)\b/.test(lower)) {
      suggestions.push({ type: 'section', text: 'Add a Skills section listing your technical abilities.' });
    }
    if (Array.isArray(roleKeywords) && roleKeywords.length) {
      const missing = roleKeywords.filter(k => !lower.includes(k.toLowerCase()));
      if (missing.length) {
        suggestions.push({ type: 'keywords', text: `Consider adding these role keywords: ${missing.slice(0,6).join(', ')}` });
      }
    }
    if (!/•|-/g.test(text)) {
      suggestions.push({ type: 'format', text: 'Use bullet points for responsibilities to improve readability.' });
    }
    return suggestions;
  }
  
  module.exports = { scoreResume, generateSuggestions };
  