import { PresetCombination } from './types';

export const RECIPE_PRESETS: PresetCombination[] = [
  {
    id: 'desi_chicken_karahi',
    title: 'Desi Chicken Karahi',
    cuisine: 'Pakistani',
    dietary: 'Non Vegetarian',
    ingredients: ['Chicken', 'Tomatoes', 'Onions', 'Ginger Garlic Paste', 'Green Chilies', 'Cooking Oil', 'Salt', 'Garam Masala'],
    description: 'Traditional rich and spicy wok-cooked chicken karahi with fresh ginger and coriander.',
  },
  {
    id: 'paneer_tikka_masala',
    title: 'Paneer Tikka Gravy',
    cuisine: 'Indian',
    dietary: 'Vegetarian',
    ingredients: ['Paneer', 'Tomatoes', 'Onions', 'Capsicum', 'Yogurt', 'Butter', 'Red Chili Powder', 'Garam Masala'],
    description: 'Creamy vegetarian paneer cubes simmered in a spiced tomato butter sauce.',
  },
  {
    id: 'vegetable_fried_rice',
    title: 'Indo-Chinese Fried Rice',
    cuisine: 'Chinese',
    dietary: 'Vegan',
    ingredients: ['Cooked Rice', 'Carrots', 'Capsicum', 'Spring Onions', 'Soy Sauce', 'Vinegar', 'Garlic', 'Black Pepper'],
    description: 'Quick 15-minute wok-tossed savory fried rice packed with crunchy vegetables.',
  },
  {
    id: 'creamy_garlic_pasta',
    title: 'Creamy Garlic Penne',
    cuisine: 'Italian',
    dietary: 'Vegetarian',
    ingredients: ['Penne Pasta', 'Milk or Cream', 'Butter', 'Garlic', 'Parmesan or Cheddar Cheese', 'Black Pepper', 'Oregano'],
    description: 'Comforting, rich garlic cheese pasta made with household pantry basics.',
  },
  {
    id: 'loaded_veggie_tacos',
    title: 'Street-Style Veggie Tacos',
    cuisine: 'Mexican',
    dietary: 'Gluten-Free',
    ingredients: ['Corn Tortillas', 'Kidney Beans or Black Beans', 'Sweet Corn', 'Avocado or Mayo', 'Onions', 'Lime', 'Cilantro'],
    description: 'Zesty corn tortillas loaded with spiced beans, corn salsa, and fresh lime dressing.',
  },
  {
    id: 'classic_egg_club_sandwich',
    title: 'Hostel Special Egg Club Sandwich',
    cuisine: 'American',
    dietary: 'Non Vegetarian',
    ingredients: ['Bread Slices', 'Eggs', 'Mayonnaise', 'Black Pepper', 'Cucumber', 'Butter'],
    description: 'Super quick, budget-friendly toasted egg sandwich ideal for students and hostel stayers.',
  }
];

export const POPULAR_INGREDIENT_TAGS = [
  'Eggs',
  'Chicken',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Garlic',
  'Ginger',
  'Rice',
  'Pasta',
  'Milk',
  'Yogurt',
  'Cheese',
  'Green Chilies',
  'Butter',
  'Flour'
];
