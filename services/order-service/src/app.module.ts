import { OrderModule } from './../../api-gateway/src/modules/orders/order.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    OrderModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
