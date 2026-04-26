import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Variant } from './variant.entity';
import { Repository } from 'typeorm';
import { generateCombinationKey } from './utils/generate-combination-key';

@Injectable()
export class VariantsService {
  constructor(
    @InjectRepository(Variant)
    private repo: Repository<Variant>,
  ) {}

  async create(productId: number, dto: any, product: any) {
    const combinationKey = generateCombinationKey(dto.attributes);

    const existing = await this.repo.findOne({
      where: {
        product: { id: productId },
        combinationKey,
      },
    });

    if (existing) {
      throw new BadRequestException(
        'Variant combination already exists',
      );
    }

    const variant = this.repo.create({
      ...dto,
      combinationKey,
      product,
    });

    return this.repo.save(variant);
  }
}