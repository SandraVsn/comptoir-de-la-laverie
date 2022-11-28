import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OptionType {
  @PrimaryGeneratedColumn()
  id: number;
}
