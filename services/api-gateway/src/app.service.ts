import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './dto/create-order-request.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  healthCheck(): string {
    return 'OK!';
  }
}
