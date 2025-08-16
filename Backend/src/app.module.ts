import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppRepository } from "./FoodScanner/app.repository";
import { AppResolver } from "./FoodScanner/app.resolver";
import { AppService } from "./FoodScanner/app.service";
import { FirebaseProvider } from "./Firebase/firebase.provider";
import { FirestoreService } from "./Firebase/firestore.service";
import { FirestoreResolver } from "./Firebase/firebase.resolver";
import { AuthService } from "./Auth/auth.service";
import { AuthResolver } from "./Auth/auth.resolver";
import { AuthProvider } from "./Auth/auth.provider";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule globally available
      envFilePath: '.env', // Specify the path to your .env file
    }),
  ],
  providers: [
    AppService,
    AppResolver,
    AppRepository,
    AuthService,
    AuthResolver,
    AuthProvider,
    FirebaseProvider,
    FirestoreService,
    FirestoreResolver,
  ],
  exports: [FirestoreService],
})
export class AppModule {}
