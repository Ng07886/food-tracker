export declare class FoodEntriesDTO {
    calories: number;
    macros: {
        carbs: number;
        fats: number;
        protein: number;
    };
    foods: {
        name: string;
        calories: number;
        macros: {
            carbs: number;
            fats: number;
            protein: number;
        };
    }[];
}
export declare class GetFoodEntriesByDateDTO {
    userId: string;
    date: string;
}
