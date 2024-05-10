import { IEnvironmentBase } from './config.entity';

// agrega variables que desees
interface IDevelopment extends IEnvironmentBase {}

export type DevelopmentFactory = () => IDevelopment;

export const development: DevelopmentFactory = () => ({
  PORT: process.env.PORT,
  TIME_ZONE: process.env.TIME_ZONE,
  JWT_SECRET: '',
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: parseInt(process.env.MYSQL_PORT),
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
});
