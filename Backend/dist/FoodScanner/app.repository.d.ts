export declare class AppRepository {
    private readonly API_URL;
    private readonly API_KEY;
    searchFoods(query: string, pageSize?: number): Promise<any>;
}
