# EasyERP Official Website (Saudi Arabia & GCC)

Official marketing, product showcase, and lead generation website for **EasyERP**, tailored for Saudi Arabia and the GCC market.

## Key Features
- **Bilingual & RTL-First**: 🇸🇦 Arabic (default) & 🇬🇧 English instant toggle with proper RTL mirroring.
- **ZATCA Certified Showcase**: Detailed breakdown of Phase 1 & Phase 2 compliance.
- **Conversion Focused**: Direct WhatsApp integration, phone dialer, and custom lead generation.
- **Starter Tier at 100 SAR**: Highlights the 100 SAR/month plan covering Sales, Purchases, Stock, Accounting, and ZATCA.
- **Interactive Sandbox**: In-browser simulation of invoices with QR codes, dashboard KPIs, and stock levels.

## How to Customize Contact Information
Open `src/data/config.js` to change:
- `whatsappNumber`: Your WhatsApp sales phone number (e.g. `96650xxxxxxx`)
- `phone`: Your direct calling number
- `email`: Your business email

## Development
```bash
npm install
npm run dev
```

## Production Build & Self-Hosting

### 1. Build Static Assets
```bash
npm run build
```
This generates the optimized production bundle in `./dist`.

### 2. Run with Node.js Server
```bash
npm start
```
The website will run on `http://localhost:3088` (or `PORT` environment variable).

### 3. Deploy to IIS (Windows Server)
Copy `dist/` and `web.config` to your IIS website directory (`C:\inetpub\wwwroot\easyerp-website`).
