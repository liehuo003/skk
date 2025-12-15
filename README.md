# Sailtik B2B Matcha Landing Page

Single-page B2B homepage for Sailtik built with Next.js (App Router) and Tailwind CSS. The site highlights matcha grades, OEM support, compliance information, and a lead form that posts to `/api/contact`.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the page.

## Contact Form Backend
- The `/api/contact` endpoint logs submissions to `data/leads.json` in development. If file writing is unavailable (e.g., on some serverless platforms), it falls back to console logging.
- The form displays a success message after submission: “Thanks! We’ll get back within 1 business day.”

## Project Structure
- `app/page.tsx`: homepage composition using reusable section components.
- `components/`: UI components for each section.
- `app/api/contact/route.ts`: API route handling contact submissions.
- `app/globals.css`: Tailwind styles and custom utilities.

## Notes
- No pricing, MOQ numbers, or free sample messaging are displayed.
- Designed for a clean, professional, Japanese-inspired aesthetic with deep green accents.
