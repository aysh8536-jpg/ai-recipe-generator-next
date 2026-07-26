export type CuisineType =
  | 'Pakistani'
  | 'Indian'
  | 'Chinese'
  | 'Italian'
  | 'American'
  | 'Mexican'
  | 'Any / Chef\'s Choice';

export type DietaryType =
  | 'Non Vegetarian'
  | 'Vegetarian'
  | 'Vegan'
  | 'Halal'
  | 'Gluten-Free';

export interface IngredientItem {
  item: string;
  amount?: string;
}

export interface NutritionInfo {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

export interface RecipeResponse {
  recipeName: string;
  summary: string;
  cuisine: string;
  dietaryTag: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedCalories: string;
  ingredients: (string | IngredientItem)[];
  missingIngredients?: string[];
  instructions: string[];
  cookingTips: string[];
  nutrition: NutritionInfo;
}

export interface RecipeRequest {
  ingredients: string;
  cuisine?: string;
  dietary?: string;
  servings?: number;
  additionalNotes?: string;
}

export interface SavedRecipe extends RecipeResponse {
  id: string;
  timestamp: number;
  recipe?: RecipeResponse; // Backward compatibility helper if nested
  isFavorite?: boolean;
}

export interface PresetCombination {
  id: string;
  title: string;
  cuisine: CuisineType;
  dietary: DietaryType;
  ingredients: string[];
  description: string;
}

export type ActiveTabType = 'home' | 'generator' | 'history' | 'favorites' | 'about';
