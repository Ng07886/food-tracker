"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var apollo_1 = require("@nestjs/apollo");
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var app_repository_1 = require("./FoodScanner/app.repository");
var app_resolver_1 = require("./FoodScanner/app.resolver");
var app_service_1 = require("./FoodScanner/app.service");
var firebase_provider_1 = require("./Firebase/firebase.provider");
var firestore_service_1 = require("./Firebase/firestore.service");
var firebase_resolver_1 = require("./Firebase/firebase.resolver");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: true,
                }),
            ],
            providers: [
                app_service_1.AppService,
                app_resolver_1.AppResolver,
                app_repository_1.AppRepository,
                firebase_provider_1.FirebaseProvider,
                firestore_service_1.FirestoreService,
                firebase_resolver_1.FirestoreResolver,
            ],
            exports: [firestore_service_1.FirestoreService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map