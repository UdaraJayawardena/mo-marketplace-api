import { IsNumber, IsObject, Min } from 'class-validator';

export class CreateVariantDto {
  @IsObject()
  attributes!: Record<string, any>;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(0)
  stock!: number;
}