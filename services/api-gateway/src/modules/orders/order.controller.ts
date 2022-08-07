/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  getOrder(@Param() params) {
    this.orderService.getOrder(params.id)
  }

  @EventPattern('got_order')
  handleGotOrder(data: any) {
    this.orderService.handleGotOrder(data.value);
  }
}
