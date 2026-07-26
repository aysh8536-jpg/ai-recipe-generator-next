# AI Recipe Generator (Next.js 15 App Router)

A modern, production-ready AI Recipe Generator web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Google Gemini AI**.

It converts whatever ingredients you have in your kitchen into delicious, easy-to-follow, step-by-step recipes in seconds with nutrition breakdowns and customizable portion sizes.

---

## Features

- 🥘 **Ingredient-Based AI Chef**: Enter ingredients or pick common staples to generate custom recipes.
- 🌍 **Multi-Cuisine & Dietary Filters**: Supports Pakistani, Indian, Chinese, Italian, American, Mexican, and Chef's Choice with Vegetarian, Vegan, Halal, Non-Veg, or Gluten-Free preferences.
- ⏱️ **Cooking Steps & Portions**: Step-by-step interactive checkboxes, prep/cook times, and adjustable servings.
- 📊 **Nutrition Calculator**: Estimated calories, protein, carbs, and fat per serving.
- 📋 **Copy & Download**: One-click recipe copying and `.txt` file downloading for offline cooking.
- 💾 **Local Archives & Favorites**: Save recipes to your browser history and bookmark favorites.
- 🌙 **Dark/Light Mode**: Full theme toggle with persistent state.
- 🔒 **Secure Next.js Server-Side API**: Google Gemini API key is kept completely hidden on the server (`/api/generate`).
- ⚡ **100% Vercel Compatible**: Zero custom servers, Express, or PHP required.

---

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **AI SDK**: Google GenAI (`@google/genai`) using model `gemini-3.6-flash`
- **Icons**: Lucide React Icons

---

## Project Structure

```
├── app/
│   ├── layout.tsx             # Root layout with ClientAppShell wrapper
│   ├── page.tsx               # Hero & Landing Page
│   ├── globals.css            # Global CSS & Tailwind imports
│   ├── generator/
│   │   └── page.tsx           # AI Recipe Generator Studio
│   ├── history/
│   │   └── page.tsx           # Recipe History Archives
│   ├── favorites/
│   │   └── page.tsx           # Bookmarked Favorites
│   ├── about/
│   │   └── page.tsx           # About App & Mission
│   └── api/
│       └── generate/
│           └── route.ts       # Server-side Gemini API Route
├── components/
│   ├── Navbar.tsx             # Responsive Navigation Bar
│   ├── Footer.tsx             # Footer
│   ├── RecipeCard.tsx         # Printable Recipe Display Card
│   ├── PresetSelector.tsx     # Preset Recipe Inspiration Cards
│   └── ui/                    # Reusable shadcn/ui components (button, card, badge)
├── lib/
│   ├── utils.ts               # Tailwind merge helper
│   ├── types.ts               # Shared TypeScript interfaces
│   └── presets.ts             # Recipe presets & staple tags
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.js           # ESLint configuration
└── package.json               # Package dependencies and scripts
```

---

## Environment Variables

Create a `.env.local` file in the root directory (or set environment variables in Vercel):

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

> **Security Note**: Never prefix `GEMINI_API_KEY` with `NEXT_PUBLIC_`. The API key is strictly accessed on the server inside `app/api/generate/route.ts`.

---

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build & Test Production Bundle**:
   ```bash
   npm run build
   npm start
   ```

---

## Vercel Deployment

1. Push or import your repository into [Vercel](https://vercel.com).
2. Add the environment variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: `[Your Gemini API Key]`
3. Click **Deploy**. Vercel will automatically run:
   ```bash
   npm install
   npm run build
   ```
   and launch your application on Edge/Serverless functions.

---

## Troubleshooting

- **"GEMINI_API_KEY environment variable is missing"**: Verify that `GEMINI_API_KEY` is added to `.env.local` locally or under Environment Variables in Vercel settings.
- **Port Conflicts**: Next.js defaults to port `3000`. If port 3000 is occupied, you can specify `-p 3001` or let Next dev select an open port.
