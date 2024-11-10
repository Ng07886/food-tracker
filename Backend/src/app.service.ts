import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getFoods(query: string): Promise<any> {
    return this.appRepository.searchFoods(query);
    // return 'You Are Gayyy';
  }

  whatYouAre(): string {
    return 'You Are Gay';
  }
}
