import { registerAs } from '@nestjs/config';
import { IDevelopment } from '../interfaces';

export default registerAs('config', (): IDevelopment => {
  return {
    port: parseInt(process.env.PORT),
    jwtSecret: process.env.JWT_SECRET,
    timeZone: process.env.TIME_ZONE,
    mysqlDB: {
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      databaseName: process.env.MYSQL_DATABASE,
    },
  };
});
