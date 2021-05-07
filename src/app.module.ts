import { Module } from '@nestjs/common';
import { UsersModule } from './db/users/users.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';

import { TYPEORM_CONFIG } from './config/constants';
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApiOutModule } from './apiOut/apiOut.module';
import { ApivideosModule } from './apivideos/apivideos.module';
import { ApilikeuserModule } from './apilikeuser/apilikeuser.module';
import { ApiuservideoModule } from './apiuservideo/apiuservideo.module';
import { ApiPreguntasModule } from './apiPreguntas/apipreguntas.module';
import { ApiEmailModule } from './apiEmail/apiemail.module';
import { ApiNotificacionesModule } from './apiNotificaciones/apinotificaciones.module';
import { ApiRetoModule } from './apiReto/apireto.module';
import { ApiTextosModule } from './apiTextos/apiTextos.module';
import { ApiEnlacesModule } from './apiEnlaces/apiEnlaces.module';
import { ApiUsuariosModule } from './apiUsuarios/apiUsuarios.module';
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
    ApiOutModule,
    UsersModule,
    LoginModule,
    AuthModule,
    DbModule,
    ApivideosModule,
    ApilikeuserModule,
    ApiuservideoModule,
    ApiPreguntasModule,
    ApiEmailModule,
    ApiRetoModule,
    ApiNotificacionesModule,
    ApiTextosModule,
    ApiEnlacesModule,
    ApiUsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
