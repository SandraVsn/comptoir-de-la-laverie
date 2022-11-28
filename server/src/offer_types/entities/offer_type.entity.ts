import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfferType {
  @PrimaryGeneratedColumn()
  id: number;
}
