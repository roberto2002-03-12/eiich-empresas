import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USERNAME'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE'),
        // colocar las entidades
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // activalo solamente en dev, si quieres
        // pero no lo recomiendo en mi opinión.
        // No tengo fundamento para argumentar mi razón
        // simplemente no lo suelo hacer.
        synchronize: false,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
