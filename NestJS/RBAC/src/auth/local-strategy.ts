import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  // Validate username and password
  validate(username: string, password: string): User {
    const user: User = this.userService.getUserByUserName(username);
    console.log(' User is:' + user + 'and type of user is :' + typeof user);
    if (user === undefined) throw new UnauthorizedException();
    if (user != undefined && user.password == password) {
      console.log('Not Found');
      return user;
    } else {
      console.log('Not Authorized');
      throw new UnauthorizedException();
    }
  }
}
