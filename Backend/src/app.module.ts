import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Automatically generates schema
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule globally available
      envFilePath: '.env', // Specify the path to your .env file
    }),
  ],
  providers: [AppService, AppResolver, AppRepository],
})
export class AppModule {}
