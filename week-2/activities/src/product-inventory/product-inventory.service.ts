import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductInventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async add(addProductDto: AddProductDto) {
    try {
      addProductDto.createdAt = new Date();
      return await this.prisma.products.create({
        data: addProductDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async edit(id: number, updateProductDto: UpdateProductDto) {
    try {
      updateProductDto.updatedAt = new Date();
      return await this.prisma.products.update({
        where: { id, deletedAt: null },
        data: updateProductDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.products.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      });
    } catch (error) {
      return error.message;
    }
  }

  async checkStock(name: string) {
    try {
      const checkStock = await this.prisma.products.findMany({
        where: {
          name: name,
        },
      });
      if (!checkStock) {
        console.log(checkStock);
        return 'Product not found.';
      }
      return checkStock;
    } catch (error) {
      return error.message;
    }
  }
}
