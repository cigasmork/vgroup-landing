# V Financial Group — Corporate Landing Page

A polished bilingual (Korean / English) corporate landing website for **V Financial Group**, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist Sans (via next/font)

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles + design tokens
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (client, assembles all sections)
├── components/
│   ├── Header.tsx        # Sticky bilingual navigation
│   ├── Footer.tsx        # Footer with contact info
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── GroupIntro.tsx    # Group introduction + stats
│       ├── BusinessOverview.tsx  # 4 business cards grid
│       ├── VPaySection.tsx       # V Pay detail
│       ├── VBazzarSection.tsx    # V Bazzar detail
│       ├── VPhoneSection.tsx     # V Phone detail
│       ├── HealthcareSection.tsx # Healthcare detail
│       ├── Strengths.tsx         # Core strengths (dark section)
│       └── Contact.tsx           # Contact / CTA section
├── context/
│   └── LangContext.tsx   # Language context (KO/EN toggle)
└── messages/
    ├── ko.ts             # Korean translations
    └── en.ts             # English translations
```

## 🌐 Sections

1. **Header** — Sticky nav with smooth scroll + KR/EN toggle
2. **Hero** — Bold headline, CTA, abstract portfolio visual
3. **Group Introduction** — Company description + stats
4. **Business Overview** — 4 business cards grid
5. **V Pay** — Cross-border digital finance platform
6. **V Bazzar** — C2C commerce marketplace
7. **V Phone** — Next-gen digital lifestyle platform
8. **Healthcare** — SNP-based personalized healthcare
9. **Core Strengths** — Dark section with 5 differentiators
10. **Contact** — CTA buttons + address / contact info
11. **Footer** — Links, copyright, business registration

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌍 Deployment

This project is ready for deployment on [Vercel](https://vercel.com):

```bash
npx vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments.

## ✏️ Editing Content

All text content is in:
- `messages/ko.ts` — Korean
- `messages/en.ts` — English

Edit translations there to update any text across the site without touching component files.

---

**V Financial Group** | info@vpayv.com | 070-4136-4390
