import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { VariantsModule } from '../variants/variants.module'; // 👈 import

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    VariantsModule, // 👈 add this
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
