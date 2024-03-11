import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth-service';
import { RoleGuard } from './role.guard';
import { ROLES_ENUM } from './user/role-enum';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @Get('/sales') 
  @UseGuards(AuthGuard('local'))
  //@UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard('jwt'), new RoleGuard(ROLES_ENUM.ROLES.SALES_ROLE))
  salasReport(@Request() req): string {
    return (
      ' This is annual sales report can be viewed by SalesManger' +
      JSON.stringify(req.user)
    );
  }
  @Get('/hr')
  //@UseGuards(AuthGuard('local'))
  //@UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard('jwt'), new RoleGuard(ROLES_ENUM.ROLES.HR_ROLE))
  HRReport(@Request() req): string {
    return (
      ' This is annual HR report can be view by HR Manager' +
      JSON.stringify(req.user)
    );
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): string {
    console.log('Hi');
    // AuthGuard also attaches the user informtion in payload
    const token = this.authService.generateToken(req.user);
   // return req.user;
    return token;
  }
  /*{
    "username": "User1",
    "password": "pass1",
    "email": "user1@gmail.com",
    "age": 30
     } */

  /* getHello(): string {
    console.log('Hi');
    return ' Hello Login';
  }*/
}
