import { AppRepository } from './app.repository';
export declare class AppService {
    private readonly appRepository;
    constructor(appRepository: AppRepository);
    getFoods(query: string): Promise<any>;
    whatYouAre(): string;
}
