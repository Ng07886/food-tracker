import { Resolver, Query, Args } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Food } from './FoodDTO';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  whatYouAre(): string {
    return this.appService.whatYouAre();
  }

  @Query(() => Food)
  async searchFoods(@Args('query') query: string): Promise<Food> {
    return this.appService.getFoods(query);
  }
}
