import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { ROLES_ENUM } from './role-enum';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'User1',
      password: 'pass1',
      email: 'user1@gmail.com',
      age: 30,
      role: ROLES_ENUM.ROLES.HR_ROLE,
    },
    {
      username: 'User2',
      password: 'pass2',
      email: 'user2@gmail.com',
      age: 31,
      role: ROLES_ENUM.ROLES.HR_ROLE,
    },
    {
      username: 'User3',
      password: 'pass3',
      email: 'user3@gmail.com',
      age: 32,
      role: ROLES_ENUM.ROLES.SALES_ROLE,
    },
  ];

  getUserByUserName(uname: string): User {
    console.log('Uname is :' + uname);
    return this.users.find((user: User) => user.username === uname);
  }
}
