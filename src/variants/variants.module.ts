import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { Variant } from './variant.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Variant])], // 👈 add this
  controllers: [VariantsController],

  providers: [VariantsService],
    exports: [VariantsService], // 👈 this was missing
})
export class VariantsModule {}
