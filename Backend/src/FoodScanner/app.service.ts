import { Injectable } from "@nestjs/common";
import { AppRepository } from "./app.repository";
import { FoodDetails } from "./FoodDTO";

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async searchFoods(gtinCode: string): Promise<FoodDetails> {
    return this.appRepository.searchFoods(gtinCode);
  }
}
