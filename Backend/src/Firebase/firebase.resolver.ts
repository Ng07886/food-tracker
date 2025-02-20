import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { FirestoreService } from "./firestore.service";
import { FoodEntries } from "./Types/firebase.types";
import { GetFoodEntriesByDateDTO, FoodEntryDto } from "./Types/firebase.dto";

@Resolver()
export class FirestoreResolver {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Query(() => FoodEntries)
  async getFoodEntriesByDate(
    @Args("input") input: GetFoodEntriesByDateDTO
  ): Promise<FoodEntries> {
    return this.firestoreService.getFoodEntriesByDate(input.userId, input.date);
  }

  @Mutation(() => String)
  async addFoodEntry(@Args("input") input: FoodEntryDto): Promise<String> {
    return this.firestoreService.addFoodEntry(input);
  }

  @Mutation(() => String)
  async initializeUser(@Args("userId") userId: string): Promise<String> {
    return this.firestoreService.initializeUser(userId);
  }

  @Mutation(() => String)
  async deleteFoodEntry() {}
}
