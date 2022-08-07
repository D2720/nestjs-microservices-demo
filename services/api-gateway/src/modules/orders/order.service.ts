/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from 'src/dto/create-order-request.dto';
import { GetOrderRequest } from 'src/dto/get-order-request.dto';
import { GetOrderEvent } from 'src/events/get-order.event';
import { GotOrderEvent } from 'src/events/got-order.event';
import { OrderCreatedEvent } from 'src/events/order-created.event';

@Injectable()
export class OrderService {
  constructor(
    @Injectable('ORDER_SERVICE') private readonly orderChannel: ClientKafka,
  ) {}

  getOrder({ orderId }: GetOrderRequest) {
    this.orderChannel.emit(
      'get_order',
      new GetOrderEvent(orderId),
    );
    return 'Request success!'
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.orderChannel.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
    return 'Request success!';
  }

  handleGotOrder(gotOrderEvent: GotOrderEvent) {
    console.log(
      `Order detail: OrderID ${gotOrderEvent.orderId}, userId ${gotOrderEvent.userId} and price is ${gotOrderEvent.price}.`
    );
    return gotOrderEvent.orderId;
  }
}
