import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './dto/create-order-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return this.appService.getHello();
  }
}
