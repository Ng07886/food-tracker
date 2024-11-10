"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRepository = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppRepository = class AppRepository {
    constructor() {
        this.API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
        this.API_KEY = 'DEMO_KEY';
    }
    async searchFoods(query, pageSize = 10) {
        const url = `${this.API_URL}?query=${query}&pageSize=${pageSize}&api_key=${this.API_KEY}`;
        try {
            const response = await axios_1.default.get(url);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            throw new Error(`Error fetching data from USDA API: ${error.message}`);
        }
    }
};
exports.AppRepository = AppRepository;
exports.AppRepository = AppRepository = __decorate([
    (0, common_1.Injectable)()
], AppRepository);
//# sourceMappingURL=app.repository.js.map