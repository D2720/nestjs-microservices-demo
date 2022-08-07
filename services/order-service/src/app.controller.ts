import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @EventPattern('get_order')
  handleGetOrder(data: any) {
    this.appService.handleGetOrder(data.value);
  }
}
