import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3088;

app.use(cors());
app.use(express.json());

// Serve production static assets from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'EasyERP Official Website',
    timestamp: new Date().toISOString()
  });
});

// Optional contact lead recording endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, company, tier, notes } = req.body;
  console.log(`[LEAD RECEIVED] ${new Date().toISOString()} - ${name} (${phone}) - Company: ${company} - Plan: ${tier}`);
  res.json({ success: true, message: 'Lead received successfully' });
});

// Fallback to index.html for single-page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`EasyERP Website Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`=========================================`);
});
