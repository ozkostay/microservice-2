import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findAll(){
    const users = [{ user: 'User1'}, { user: 'User2'}];
    return users;
  } 
}
