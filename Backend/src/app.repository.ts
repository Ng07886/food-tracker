import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppRepository {
  private readonly API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  private readonly API_KEY = process.env.API_KEY;

  async searchFoods(query: string, pageSize = 10): Promise<any> {
    const url = `${this.API_URL}?query=${query}&pageSize=${pageSize}&api_key=${process.env.API_KEY}`;
    try {
      const response = await axios.get(url);
      const foods = response.data.foods.map((food: any) => ({
        id: food.fdcId,
        description: food.description
        }));
      //console.log(response.data);
      return foods;

    } catch (error) {
      throw new Error(`Error fetching data from USDA API: ${error.message}`);
    }
  }
}
