import { AppRepository } from "./app.repository";
export declare class AppService {
    private readonly appRepository;
    constructor(appRepository: AppRepository);
    getFoods(userId: string): Promise<any>;
}
