import { AppModule } from "./app.module";
import { OrderModule } from "./modules/orders/order.module";

export const routers = [
  {
    path: 'health_check',
    module: AppModule,
  },
  {
    path: 'create_order',
    module: OrderModule,
  },
]