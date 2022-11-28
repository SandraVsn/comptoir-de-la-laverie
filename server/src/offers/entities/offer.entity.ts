import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.offers)
  order: Order;
}
