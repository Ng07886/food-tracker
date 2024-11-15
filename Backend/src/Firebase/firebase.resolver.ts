import { Resolver, Query, Args } from "@nestjs/graphql";
import { FirestoreService } from "./firestore.service";
import { FoodEntries } from "./Types/firebase.types";
import { GetFoodEntriesByDateDTO } from "./Types/firebase.dto";

@Resolver()
export class FirestoreResolver {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Query(() => FoodEntries)
  async getFoodEntriesByDate(
    @Args("input") input: GetFoodEntriesByDateDTO
  ): Promise<FoodEntries> {
    return this.firestoreService.getFoodEntriesByDate(input.userId, input.date);
  }
}
