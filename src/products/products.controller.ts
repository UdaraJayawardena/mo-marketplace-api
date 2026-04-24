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

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private variantsService: VariantsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: any) {
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
    @Body() dto: any,
  ) {
    const product = await this.productsService.findOne(id);
    return this.variantsService.create(id, dto, product);
  }
}