import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key is missing. Please configure GEMINI_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { ingredients, cuisine, dietary, servings, additionalNotes } = body;

    if (!ingredients || typeof ingredients !== 'string' || !ingredients.trim()) {
      return NextResponse.json(
        { error: 'Please provide at least one ingredient.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
You are a world-class professional chef and culinary AI expert.
Create a complete, realistic, delicious, and easy-to-follow recipe based on these parameters:

Ingredients Available: ${ingredients}
Cuisine Style Preference: ${cuisine || 'Any'}
Dietary Restriction: ${dietary || 'None'}
Serving Size: ${servings || 2} persons
Additional Notes/Equipment: ${additionalNotes || 'None'}

Rules & Requirements:
1. Make full creative use of the provided ingredients. You may assume standard kitchen basics like salt, water, cooking oil, basic black pepper, and butter if needed.
2. If important essential ingredients are missing to complete the authentic dish (e.g. missing chicken stock or specific spices), list them in "missingIngredients".
3. Calculate realistic nutrition estimates per single serving.
4. Ensure instructions are clear, sequentially numbered, step-by-step, and easy to follow.

You MUST respond strictly with valid JSON conforming to this exact structure:
{
  "recipeName": "Title of the Recipe",
  "summary": "1-2 sentence delicious description of the dish",
  "cuisine": "${cuisine || 'Pakistani'}",
  "dietaryTag": "${dietary || 'Non Vegetarian'}",
  "prepTime": "15 Mins",
  "cookTime": "20 Mins",
  "servings": ${servings || 2},
  "difficulty": "Easy",
  "estimatedCalories": "450 kcal",
  "ingredients": [
    { "item": "Chicken breast, diced", "amount": "500g" },
    { "item": "Tomatoes, chopped", "amount": "2 medium" }
  ],
  "missingIngredients": [
    "1 tbsp Garam Masala (Optional for extra flavor)"
  ],
  "instructions": [
    "Heat 2 tbsp cooking oil in a wok or deep skillet over medium-high heat.",
    "Add chopped onions and saute until golden brown..."
  ],
  "cookingTips": [
    "Do not overcook the chicken to keep it juicy and tender.",
    "Garnish with fresh coriander and julienned ginger before serving."
  ],
  "nutrition": {
    "calories": "450 kcal",
    "protein": "38g",
    "carbs": "12g",
    "fat": "18g",
    "fiber": "3g"
  }
}
Do NOT wrap in markdown code blocks like \\\`\\\`\\\`json. Return raw JSON string only.
`.trim();

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text || '';
    let jsonContent: any;

    try {
      jsonContent = JSON.parse(responseText);
    } catch {
      // Fallback cleanup if model included codeblocks
      const cleaned = responseText
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/```$/i, '')
        .trim();
      jsonContent = JSON.parse(cleaned);
    }

    return NextResponse.json(jsonContent);
  } catch (error: any) {
    console.error('Error generating recipe via Gemini API:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate recipe. Please try again.' },
      { status: 500 }
    );
  }
}
