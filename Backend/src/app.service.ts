import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { Food } from './FoodDTO';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getFoods(query: string): Promise<Food> {
    return this.appRepository.searchFoods(query);
  }
}
