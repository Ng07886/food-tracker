import { IsString, Matches, IsNotEmpty, IsDefined } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

export class FoodEntriesDTO {
  calories: number;
  macros: { carbs: number; fats: number; protein: number };
  foods: {
    name: string;
    calories: number;
    macros: { carbs: number; fats: number; protein: number };
  }[];
}

@InputType()
export class GetFoodEntriesByDateDTO {
  @Field()
  @IsString()
  @IsDefined()
  userId: string;

  @Field()
  @IsString()
  @Matches(/^\d{8}$/, { message: "Date must be in yyyymmdd format." })
  @IsDefined()
  date: string;
}
