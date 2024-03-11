import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local-strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth-service';
import { JwtStrategy } from './jwt-strategy';
// It will have all authentication related code

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register(
      // This gives a JWTModule for DI
      { secret: 'mysecretkey', signOptions: { expiresIn: '60s' } },
    ),
  ],
  controllers: [],
  providers: [LocalStrategy, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

/*@Module({
  imports: [PassportModule, UserModule],
  controllers: [],
  providers: [LocalStrategy],
})
export class AuthModule {} */
