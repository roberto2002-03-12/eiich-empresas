import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './provider/database.provider';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class MysqlModule {}
