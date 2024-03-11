import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
//import { User } from 'src/user/user.entity';
//import { UserService } from 'src/user/user.servicenpm i --save-dev @types/passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'mysecretkey',
    });
  }

  // Validate username and password
  validate(payload: any): any {
    return payload;
  }
}
