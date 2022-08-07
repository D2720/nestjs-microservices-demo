export class GetOrderEvent {
  constructor(
    public readonly orderId: number,
  ) {}
  
  toString() {
    return JSON.stringify({
      orderId: this.orderId,
    });
  }
}
  