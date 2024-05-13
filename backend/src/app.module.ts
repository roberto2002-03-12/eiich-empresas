import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './database/mysql/mysql.module';

import config from './config';
import { environment } from './config/environment';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    MysqlModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
