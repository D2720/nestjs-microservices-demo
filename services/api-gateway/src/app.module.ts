import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/orders/order.module';
import { routers } from './routers';

@Module({
  imports: [
    AppModule,
    OrderModule,
    RouterModule.register(routers),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
