import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @MessagePattern('books.findAll')
  findeAll(@Payload() pl: any){
    console.log('Pl', pl);
    return this.appService.findAll();
  }
}
