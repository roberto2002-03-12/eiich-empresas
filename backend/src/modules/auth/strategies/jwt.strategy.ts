import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from 'src/config';
import { IPayloadToken } from '../interfaces/token.entity';

// PassportStrategy(Strategy, 'local') en el segundo parametros le declaras el nombre
// a la strategy
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      // Donde va esperar el token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
    });
  }

  // ¿Por qué carambas solo haces un return?
  // en el super ya se esta validando el token
  validate(payload: IPayloadToken) {
    return payload;
  }
}
