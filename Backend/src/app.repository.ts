import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv'
import { Food, LabelNutrient } from './FoodDTO';

dotenv.config()

@Injectable()
export class AppRepository {
  private readonly API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  private readonly API_KEY = process.env.API_KEY;

  async searchFoods(query: string, pageSize = 10): Promise<any> {
    const url = `${this.API_URL}?query=${query}&pageSize=${pageSize}&api_key=${this.API_KEY}`;
    try {
      const response = await axios.get(url);
      const food = this.mapToFoodDto(response.data.foods[0]);
      return food;

    } catch (error) {
      throw new Error(`Error fetching data from USDA API: ${error.message}`);
    }
  }

  private mapToFoodDto( foodObj: any): Food {
    return {

      id: foodObj.fdcId,
      description: foodObj.description,
      labelNutrients: foodObj.foodNutrients.map((nutrientObj: any): LabelNutrient => ({
        nutrientId: nutrientObj.nutrientId,
        name: nutrientObj.nutrientName,
        amount: nutrientObj.nutrientNumber,
        unitName: nutrientObj.unitName
      })),

    }
  }
}


