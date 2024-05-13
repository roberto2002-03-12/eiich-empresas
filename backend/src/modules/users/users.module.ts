import { Module } from '@nestjs/common';
import { UsersService } from './services/users-service.service';
import { UserControllerController } from './controllers/user-controller.controller';
import { userProviders } from './providers/userProvider';
import { MysqlModule } from 'src/database/mysql/mysql.module';

@Module({
  imports: [MysqlModule],
  providers: [...userProviders, UsersService],
  controllers: [UserControllerController],
  exports: [UsersService],
})
export class UsersModule {}
