import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth-service.service';
import { User } from 'src/modules/users/entities';

// PassportStrategy(Strategy, 'local') en el segundo parametros le declaras el nombre
// a la strategy
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    // debes especificar el atributo que tomara en vez de username
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(email, password);
    if (user === null) throw new UnauthorizedException('Invalid credentials.');
    return user;
  }
}
