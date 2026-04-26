import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
@Unique(['product', 'combinationKey'])
export class Variant {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product, (product) => product.variants, {
    onDelete: 'CASCADE',
  })
  product!: Product;

  @Column('jsonb')
  attributes!: Record<string, any>;

  @Column()
  combinationKey!: string;

  @Column('decimal')
  price!: number;

  @Column()
  stock!: number;
}