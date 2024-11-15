import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv'
import { FoodDetails } from './FoodDTO';

dotenv.config()

const mappings = {

  1003 : "protein",
  1004 : "fats",
  1005 : "carbs",
  1008 : "calories"
}

@Injectable()
export class AppRepository {
  private readonly API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  private readonly API_KEY = process.env.API_KEY;

  async searchFoods(query: string, pageSize = 10): Promise<FoodDetails> {
    const url = `${this.API_URL}?query=${query}&pageSize=${pageSize}&api_key=${this.API_KEY}`;
    try {
      const response = await axios.get(url);
      const foodObj = response.data.foods[0]
      const macros = this.extractMacros(foodObj.foodNutrients);
      const food = {
            id: foodObj.fdcId,
            description: foodObj.description,
            nutritionData: macros
      };

      return food;

    } catch (error) {
      throw new Error(`Error fetching data from USDA API: ${error.message}`);
    }
  }

  private extractMacros( foodNutrients: [any]): any {

    const retObj = {}

    foodNutrients.forEach((nutrient: any)=>{
      
      if(nutrient.nutrientId in mappings)
        retObj[mappings[nutrient.nutrientId]] = {
          nutrientId: nutrient.nutrientId,
          name: nutrient.nutrientName,
          amount: nutrient.nutrientNumber,
          unitName: nutrient.unitName
        }
    })

    return retObj;
    
    }
    
  }


