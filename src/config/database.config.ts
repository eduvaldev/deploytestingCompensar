import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'compensar.ckzx5p2ww1bg.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres,
    password: 'Lokiyoo04!',
    database: 'compensar',
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
    autoLoadEntities: true,
    migrationsRun: true,
    migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
    migrationsTableName: 'migrations_typeorm',
    cli: {
      migrationsDir: 'src/migrations',
    },
    synchronize: true,
    logging: true,
    logger: 'file',
  };
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));
