import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetOrderEvent } from './events/get-order.event';
import { GotOrderEvent } from './events/got-order.event';

@Injectable()
export class AppService {
  constructor(
    @Injectable('API_SERVICE') private readonly apiChannel: ClientKafka,
  ) {}
  private readonly orders: any[] = [
    {
      orderId: 1,
      userId: 13523,
      price: 10000,
    },
    {
      orderId: 2,
      userId: 3759,
      price: 60000,
    },
  ]

  handleGetOrder(getOrderEvent: GetOrderEvent) {
    this.apiChannel.emit(
      'got_order',
      new GotOrderEvent(this.orders.find((order) => order.orderId === getOrderEvent.orderId))
    )
  }
}
