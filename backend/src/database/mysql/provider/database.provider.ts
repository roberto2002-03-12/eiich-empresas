import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

export const databaseProviders = [
  {
    provide: 'MYSQL',
    useFactory: async (configService: ConfigType<typeof config>) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.mysqlDB.host,
        port: configService.mysqlDB.port,
        username: configService.mysqlDB.username,
        password: configService.mysqlDB.password,
        database: configService.mysqlDB.databaseName,
        // colocar las entidades
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // activalo solamente en dev, si quieres
        // pero no lo recomiendo en mi opinión.
        // No tengo fundamento para argumentar mi razón
        // simplemente no lo suelo hacer.
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [config.KEY],
  },
];
