import { Field, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class LabelNutrient {
  @Field(() => Int)
  nutrientId: number;

  @Field()
  name: string;

  @Field(() => Float)
  amount: number;

  @Field()
  unitName: string;
}

@ObjectType()
export class Food {
  @Field()
  id: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  brandOwner?: string;

  @Field({ nullable: true })
  foodCategory?: string;

  @Field({ nullable: true })
  ingredients?: string;

  @Field(() => Float, { nullable: true })
  servingSize?: number;

  @Field({ nullable: true })
  servingSizeUnit?: string;

  @Field(() => [LabelNutrient], { nullable: 'itemsAndList' })
  labelNutrients?: LabelNutrient[];
}
