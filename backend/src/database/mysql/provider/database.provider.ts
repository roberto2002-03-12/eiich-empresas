import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';

// variables de entorno
import config from 'src/config';

// modelos
import { User, ContactInfo, PersonalInfo } from 'src/modules/users/entities';

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
        entities: [User, PersonalInfo, ContactInfo],
        // activalo solamente en dev, si quieres
        // pero no lo recomiendo en mi opinión.
        // No tengo fundamento para argumentar mi razón
        // simplemente no lo suelo hacer.
        synchronize: false,
        // IMPORTANTE: siempre matenlo en false porque
        // typeorm va volver a crear foreign keys, cosa
        // que puede malograr relaciones de tablas, por favor
        // siempre mantenerlo en false
      });

      return dataSource.initialize();
    },
    inject: [config.KEY],
  },
];
