import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Macros {
  @Field(() => Int)
  carbs: number;

  @Field(() => Int)
  fats: number;

  @Field(() => Int)
  protein: number;
}

@ObjectType()
class Food {
  @Field()
  name: string;

  @Field(() => Int)
  calories: number;

  @Field(() => Macros)
  macros: Macros;
}

@ObjectType()
export class FoodEntries {
  @Field(() => Int)
  calories: number;

  @Field(() => Macros)
  macros: Macros;

  @Field(() => [Food])
  foods: Food[];
}
