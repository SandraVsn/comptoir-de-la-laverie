import { Order } from 'src/orders/entities/order.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

export enum UserRole {
  CLIENT = 'client',
  ADMIN = 'admin',
}

export enum ClientType {
  RESIDENT = 'resident',
  TOURIST = 'tourist',
  PROFESSIONAL = 'professional',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password?: string;

  @Column()
  phoneCode: number;

  @Column()
  phoneNumber: string;

  @Column()
  whatsApp: boolean;

  @Column({ nullable: true })
  adress?: string;

  @Column({ nullable: true })
  postCode?: number;

  @Column({ nullable: true })
  city?: string;

  @Column({ type: 'enum', enum: ClientType, nullable: true })
  clientType?: ClientType;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  publicity: boolean;

  @Column({ nullable: true })
  adminComm?: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CLIENT })
  role: UserRole;

  @OneToMany(() => Order, (order) => order.user)
  orders?: Order[];
}
