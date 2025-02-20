export interface Macros {
  carbs: number;
  protein: number;
  fats: number;
}

export interface FoodEntry {
  name: string;
  calories: number;
  macros: Macros;
}
