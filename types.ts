export interface Meals {
  breakfast: string;
  lunch: string;
  midAfternoon: string;
  snack: string;
  dinner: string;
}

export interface DayPlan {
  day: string;
  meals: Meals;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  price?: number;
}

export interface ShoppingCategoryData {
  category: string;
  items: ShoppingItem[];
}

export interface ExerciseDetail {
  name: string;
  description: string;
  imageUrl: string;
}

export interface WorkoutEntry {
  id: string;
  date: string;
  day: string;
  exercise: string;
  cardio: string;
  meals: string;
  supplements: string;
  details: ExerciseDetail[];
}

export interface ProgressEntry {
  id: string;
  date: string;
  weight: string;
  notes: string;
}
