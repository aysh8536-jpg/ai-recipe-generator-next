# 🍳 AI Recipe Generator

An AI-powered web application that helps users create delicious recipes using the ingredients they already have at home.

## 📖 Project Overview

AI Recipe Generator is designed to solve a common daily problem: **"What should I cook with the ingredients I already have?"**

Instead of searching multiple websites or wasting food, users simply enter the ingredients they have, choose their preferred cuisine, dietary preference, and cooking time. The application uses **Google Gemini AI** to instantly generate a complete recipe with cooking instructions and nutrition information.

This app is especially useful for:

- 👩‍🎓 Students
- 🏠 Hostel Residents
- 👨‍👩‍👧 Families
- 👩‍💼 Busy Professionals
- 🍽️ Home Cooks

---

# 🌍 Live Demo

**Live Application:**

https://ai-recipe-generator-next-l6i3.vercel.app

---

# 💻 GitHub Repository

https://github.com/aysh8536/ai-recipe-generator-next

---

# 🚀 Features

- 🤖 AI-powered recipe generation
- 🥗 Enter available ingredients
- 🌎 Select preferred cuisine
- 🥦 Choose dietary preference
- ⏱️ Select cooking time
- 📋 Detailed ingredients list
- 👨‍🍳 Step-by-step cooking instructions
- 🥗 Nutrition information
- 📱 Fully responsive design
- ⚡ Fast performance using Next.js
- 🌐 Live deployment on Vercel

---

# 🧠 AI Feature

The application uses **Google Gemini AI** to generate personalized recipes based on the user's input.

### User Inputs

- Available Ingredients
- Cuisine Preference
- Dietary Preference
- Cooking Time

### AI Output

- Recipe Name
- Ingredients List
- Cooking Instructions
- Preparation Tips
- Estimated Nutrition Information

---

# 📝 AI System Prompt

The application sends the following instructions to the AI model:

> You are a professional chef and nutrition assistant. Generate a detailed recipe based on the provided ingredients, cuisine preference, dietary preference, and cooking time. Include a creative recipe title, a complete ingredients list, step-by-step cooking instructions, useful cooking tips, and estimated nutritional information. Ensure the recipe is practical, easy to follow, and uses only the provided ingredients whenever possible.

---

# 🛠️ Technologies Used

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## AI

- Google Gemini API

## Deployment

- Vercel

## Version Control

- GitHub

---

# 📂 Project Structure

```
ai-recipe-generator/
│
├── app/
│   ├── api/
│   ├── components/
│   ├── page.tsx
│
├── public/
├── styles/
├── lib/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project

```bash
cd ai-recipe-generator
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🏗️ Build for Production

```bash
npm run build
```

Start production server

```bash
npm run start
```

---

# 🌐 Deployment

The application is deployed using **Vercel**.

Deployment Steps:

1. Push project to GitHub.
2. Import repository into Vercel.
3. Add the environment variable:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

4. Deploy.

---

## 📷 Screenshots

### Home Page

<img src="home.png" width="900"/>

### Recipe Generator

<img src="Generate.png" width="900"/>

### History

<img src="history.png" width="900"/>

### Favorites

<img src="favourites.png" width="900"/>

### About

<img src="about.png" width="900"/>

# 🎯 Real-World Problem Solved

Many people struggle to decide what to cook using the ingredients already available at home. They often spend unnecessary time searching online or end up wasting food.

This application helps users quickly generate personalized recipes, reducing food waste, saving time, and making meal planning easier.

---

# 🔒 Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

**Important:** Never upload API keys to GitHub.

---

# 📈 Future Improvements

- Save favourite recipes
- User authentication
- Recipe history
- Image generation for recipes
- Shopping list generator
- Voice input
- Recipe sharing
- Multi-language support

---

# 👩‍💻 Author

**Ayesha Jamil**

BS Computer Science Student

---

# 📄 License

This project is developed for educational purposes as a Final Project.

---

# ⭐ Acknowledgements

- Google Gemini AI
- Next.js
- React
- Tailwind CSS
- Vercel
- GitHub