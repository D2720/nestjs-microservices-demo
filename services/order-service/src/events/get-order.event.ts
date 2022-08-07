export class GetOrderEvent {
    constructor(
      public readonly orderId: string,
    ) {}
  
    toString() {
      return JSON.stringify({
        orderId: this.orderId,
      });
    }
  }
  