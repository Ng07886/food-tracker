import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppRepository {
  private readonly API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  private readonly API_KEY = 'DEMO_KEY'; // Replace with your actual API key

  async searchFoods(query: string, pageSize = 10): Promise<any> {
    const url = `${this.API_URL}?query=${query}&pageSize=${pageSize}&api_key=${this.API_KEY}`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from USDA API: ${error.message}`);
    }
  }
}
