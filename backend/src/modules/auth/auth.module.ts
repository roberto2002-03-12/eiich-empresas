import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth-service.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

// middlewares
import { ValidateObjectMiddleware } from '../../middlewares/validate-object/validate-object.middleware';

// imports
import { UsersModule } from '../users/users.module';
import config from 'src/config';
import { LoginDto } from './dto';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
          signOptions: {
            expiresIn: '5d',
          },
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // validar antes de llegar al strategy y controller
    consumer
      .apply((req: Request, res: Response, next: NextFunction) =>
        new ValidateObjectMiddleware(LoginDto).use(req, res, next),
      )
      .forRoutes('/auth/login');
  }
}
