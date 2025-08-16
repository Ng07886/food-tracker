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
  private readonly API_URL = process.env.API_URL;
  private readonly API_KEY = process.env.API_KEY;

  async searchFoods(gtinCode: string, pageSize = 10): Promise<FoodDetails> {
    const url = `${this.API_URL}?query=${gtinCode}&pageSize=${pageSize}&api_key=${this.API_KEY}`;
    try {
      const response = await axios.get(url);
      const foodObj = response.data.foods[0]
      const macros = this.extractMacros(foodObj.foodNutrients, foodObj.servingSize);
      const food: FoodDetails = {
            id: foodObj.fdcId,
            servingSize: foodObj.servingSize,
            description: foodObj.description,
            nutritionData: macros
      };

      return food;

    } catch (error) {
      console.log(`Error fetching data from USDA API for ${gtinCode}: ${error}`)
      throw new Error(`Failed fetching data from USDA API`);
    }
  }

  private extractMacros( foodNutrients: [any], servingSize: number): any {

    const retObj = {}

    foodNutrients.forEach((nutrient: any)=>{
      
      if(nutrient.nutrientId in mappings)
        retObj[mappings[nutrient.nutrientId]] = {
          nutrientId: nutrient.nutrientId,
          name: nutrient.nutrientName,
          amount: Math.round((Number(nutrient.value)*servingSize)/100),
          unitName: nutrient.unitName
        }
    })

    return retObj;
    
    }
    
  }


