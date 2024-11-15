declare class Macros {
    carbs: number;
    fats: number;
    protein: number;
}
declare class Food {
    name: string;
    calories: number;
    macros: Macros;
}
export declare class FoodEntries {
    calories: number;
    macros: Macros;
    foods: Food[];
}
export {};
