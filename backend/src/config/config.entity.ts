export interface IEnvironmentBase {
  PORT: string;

  // zona de tiempo
  TIME_ZONE: string;

  // auth
  JWT_SECRET: string;

  // MYSQL
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USERNAME: string;
  MYSQL_PASSWORD: string;
  MYSQL_DATABASE: string;
}
