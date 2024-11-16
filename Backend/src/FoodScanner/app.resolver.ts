import { Resolver, Query, Args } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { FoodDetails } from "./FoodDTO";

@Resolver()
export class AppResolver {
  constructor(
    private readonly appService: AppService
  ) {}

  @Query(() => FoodDetails)
  async searchFoods(@Args('gtinCode') gtinCode: string): Promise<FoodDetails> {
    return this.appService.searchFoods(gtinCode);
  }

}
