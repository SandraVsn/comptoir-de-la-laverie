import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

export enum OrderStatus {
  TO_COLLECT = 'to collect',
  COLLECTED = 'collected',
  WASHED = 'washed',
  RETURNED = 'returned',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 'client' })
  createdBy: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.TO_COLLECT })
  status: OrderStatus;

  @Column({ nullable: true })
  Price?: number;

  @Column({ nullable: true })
  paymentType?: string;

  @Column({ nullable: true })
  paid?: boolean;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => Delivery, (delivery) => delivery.order)
  deliveries?: Delivery[];

  @OneToMany(() => Offer, (offer) => offer.order)
  offers?: Offer[];
}
