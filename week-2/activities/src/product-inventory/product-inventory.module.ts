import { Module } from '@nestjs/common';
import { ProductInventoryController } from './product-inventory.controller';
import { ProductInventoryService } from './product-inventory.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProductInventoryController],
  providers: [ProductInventoryService],
  imports: [PrismaModule],
})
export class ProductInventoryModule {}
