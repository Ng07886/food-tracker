import { Resolver, Query, Args } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { FirestoreService } from "../Firebase/firestore.service";

@Resolver()
export class AppResolver {
  constructor(
    private readonly appService: AppService,
    private readonly firestoreService: FirestoreService
  ) {}

  @Query(() => String)
  async searchFoods(@Args("userId") userId: string) {
    return this.appService.getFoods(userId);
  }
}
