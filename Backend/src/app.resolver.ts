import { Resolver, Query, Args } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  whatYouAre(): string {
    return this.appService.whatYouAre();
  }

  @Query(() => String)
  async searchFoods(@Args('query') query: string) {
    return this.appService.getFoods(query);
  }
}
