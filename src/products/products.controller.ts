import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { VariantsService } from '../variants/variants.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

import { CreateProductDto } from './dto/create-product.dto';
import { CreateVariantDto } from '../variants/dto/create-variant.dto';

@ApiBearerAuth() // 👈 add this
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private variantsService: VariantsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/variants')
  async addVariant(
    @Param('id') id: number,
    @Body() dto: CreateVariantDto,
  ) {
    const product = await this.productsService.findOne(id);
    return this.variantsService.create(id, dto, product);
  }
}