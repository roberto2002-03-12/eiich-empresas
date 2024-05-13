import { Controller, Get, UseGuards } from '@nestjs/common';

import { UsersService } from '../services/users-service.service';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Controller('users')
export class UserControllerController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // lo paso a auth
  // @Post()
  // createUser(@Body() payload: CreateUserDto) {
  //   return this.userService.create(payload);
  // }
}
