import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isProd = configService.get<string>('NODE_ENV') === 'prod';
        const isDev =
          configService.get<string>('NODE_ENV') === 'local' ||
          configService.get<string>('NODE_ENV') === 'dev';
        const coreGqlPath = join(process.cwd(), './core.gql');
        const domainGqlPath = join(
          process.cwd(),
          'src/controller/**/gql/schema/**/*.gql',
        );

        return {
          typePaths: [coreGqlPath, domainGqlPath],
          debug: isDev,
          playground: isDev,
          introspection: isDev,
          // formatError: (error: GraphQLError) => {
          //   const customError = error.originalError;
          //   if (!customError || !Object.keys(customError).length) {
          //     return error;
          //   }

          //   error.message = error.message;
          //   error.extensions.exception = customError.message;
          //   return error;
          // },
        };
      },
    }),
  ],
})
export class GraphQLModule {}
