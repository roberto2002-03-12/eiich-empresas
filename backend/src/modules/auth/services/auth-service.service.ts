import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../../users/services/users-service.service';
import { User } from 'src/modules/users/entities';
import { IPayloadToken } from '../interfaces/token.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findForVerify(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return user;
    return null;
  }

  generateJwt(user: User) {
    const payload: IPayloadToken = {
      sub: user.idUser,
      role: 'default',
    };

    delete user.password;
    delete user.recoveryToken;

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
