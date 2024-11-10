import { AppService } from './app.service';
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    whatYouAre(): string;
    searchFoods(query: string): Promise<any>;
}
