import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth-service.service';
import { User } from 'src/modules/users/entities';
import { CreateUserDto } from 'src/modules/users/dto';
import { UsersService } from 'src/modules/users/services/users-service.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.generateJwt(req.user as User);
  }

  @Post('register')
  register(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }
}
