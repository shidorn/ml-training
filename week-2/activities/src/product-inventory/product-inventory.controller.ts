import {
  Post,
  Body,
  Controller,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { ProductInventoryService } from './product-inventory.service';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('productInventory')
export class ProductInventoryController {
  constructor(
    private readonly productInventoryService: ProductInventoryService,
  ) {}

  @Post()
  create(@Body() addProductDto: AddProductDto) {
    return this.productInventoryService.add(addProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productInventoryService.edit(+id, updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productInventoryService.delete(+id);
  }

  @Get(':name')
  select(@Param('name') name: string) {
    return this.productInventoryService.checkStock(name);
  }
}
