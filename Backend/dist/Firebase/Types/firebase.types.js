"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodEntries = void 0;
var graphql_1 = require("@nestjs/graphql");
var Macros = (function () {
    function Macros() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Macros.prototype, "carbs", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Macros.prototype, "fats", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Macros.prototype, "protein", void 0);
    Macros = __decorate([
        (0, graphql_1.ObjectType)()
    ], Macros);
    return Macros;
}());
var Food = (function () {
    function Food() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        __metadata("design:type", String)
    ], Food.prototype, "name", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Food.prototype, "calories", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return Macros; }),
        __metadata("design:type", Macros)
    ], Food.prototype, "macros", void 0);
    Food = __decorate([
        (0, graphql_1.ObjectType)()
    ], Food);
    return Food;
}());
var FoodEntries = (function () {
    function FoodEntries() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], FoodEntries.prototype, "calories", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return Macros; }),
        __metadata("design:type", Macros)
    ], FoodEntries.prototype, "macros", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return [Food]; }),
        __metadata("design:type", Array)
    ], FoodEntries.prototype, "foods", void 0);
    FoodEntries = __decorate([
        (0, graphql_1.ObjectType)()
    ], FoodEntries);
    return FoodEntries;
}());
exports.FoodEntries = FoodEntries;
//# sourceMappingURL=firebase.types.js.map