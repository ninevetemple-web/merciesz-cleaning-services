# Merciesz Cleaning Services

Professional cleaning and laundry services in Riruta, Nairobi, Kenya.

## Contact Information
- **Phone:** +254 758 983 329 / +254 769 621 946
- **Location:** Riruta Satellite, Nairobi, Kenya
- **Hours:** Monday-Saturday 7AM-7PM, Sunday 8AM-5PM

## Services
- Home Cleaning (KES 3,000-8,000)
- Office Cleaning (KES 5,000-15,000)
- Deep Cleaning (KES 10,000-25,000)
- Laundry & Dry Cleaning (KES 500-2,000)
- Laundry Drop & Pick Service (KES 200 per delivery)
- Carpet Cleaning (KES 4,000-10,000)

## Local Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment Options

### Deploy to Render (Free)
1. Go to https://render.com
2. Sign up with GitHub
3. Click **New +** → **Web Service**
4. Connect your `merciesz-cleaning-services` repository
5. Use these settings:
   - **Name:** merciesz-cleaning
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
6. Click **Create Web Service**

Your app will be live at: `https://merciesz-cleaning.onrender.com`

### Deploy to Vercel (Recommended for Next.js)
1. Go to https://vercel.com
2. Click **New Project**
3. Import your GitHub repository
4. Click **Deploy**

## Project Structure
```
├── pages/
│   ├── index.js (Home page)
│   ├── services.js (Services page)
│   ├── contact.js (Contact page)
│   └── _app.js (App wrapper)
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Gallery.js
│   └── ServiceCard.js
├── styles/
│   └── globals.css
├── public/ (Static files)
└── package.json
```

## Features
- ✅ Responsive design (mobile & desktop)
- ✅ Service catalog with pricing
- ✅ Contact form and phone links
- ✅ Professional UI with Tailwind CSS
- ✅ Fast Next.js framework
- ✅ SEO optimized
- ✅ Free deployment ready

