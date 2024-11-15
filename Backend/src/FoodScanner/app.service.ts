import { Injectable } from "@nestjs/common";
import { AppRepository } from "./app.repository";

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getFoods(userId: string): Promise<any> {
    return this.appRepository.searchFoods(userId);
  }
}
