import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  create(dto: any) {
    const product = this.repo.create(dto);
    return this.repo.save(product);
  }

  findAll() {
    return this.repo.find({ relations: ['variants'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['variants'],
    });
  }
}