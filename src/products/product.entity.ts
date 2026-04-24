import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Variant } from '../variants/variant.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToMany(() => Variant, (variant) => variant.product, {
    cascade: true,
  })
  variants!: Variant[];
}