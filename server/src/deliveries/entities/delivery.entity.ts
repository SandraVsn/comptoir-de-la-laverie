import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.deliveries)
  order: Order;
}
