import { OrderService } from './order.service';
import { OrderController } from './order.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.KAFKA,
        option: {
          client: {
            clientId: 'order',
            brokers: 'localhost:9092',
          },
          consumer: {
            groupId: 'api-order',
          },
        },
      }
    ]),
  ],
  controllers: [
    OrderController,
  ],
  providers: [
    OrderService,
  ],
})
export class OrderModule { }
