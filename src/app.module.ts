import { Module } from '@nestjs/common';
import { UsersModule } from './db/users/users.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';

import { TYPEORM_CONFIG } from './config/constants';
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApivideosModule } from './apivideos/apivideos.module';
import { ApilikeuserModule } from './apilikeuser/apilikeuser.module';
import { ApiuservideoModule } from './apiuservideo/apiuservideo.module';
import databaseConfig from './config/database.config';
import configSecret from './config/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, configSecret],
      envFilePath: `.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
      }),
    }),
    UsersModule,
    LoginModule,
    AuthModule,
    DbModule,
    ApivideosModule,
    ApilikeuserModule,
    ApiuservideoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
