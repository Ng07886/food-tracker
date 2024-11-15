import {
  IsString,
  Matches,
  IsDefined,
  ValidateNested,
  IsNumber,
  IsDateString,
} from "class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";

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

@InputType()
class MacrosDto {
  @Field()
  @IsNumber()
  carbs: number;

  @Field()
  @IsNumber()
  fats: number;

  @Field()
  @IsNumber()
  protein: number;
}

@InputType()
export class FoodEntryDto {
  @Field()
  @IsString()
  @IsDefined()
  foodName: string;

  @Field()
  @ValidateNested()
  @Type(() => MacrosDto)
  macros: MacrosDto;

  @Field()
  @IsDateString()
  @IsDefined()
  date: string;

  @Field()
  @IsString()
  @IsDefined()
  userId: string;

  @Field()
  @IsNumber()
  @IsDefined()
  calories: number;
}
