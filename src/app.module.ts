import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { graphql } from 'graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      schema: 'graphql',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    SongModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
