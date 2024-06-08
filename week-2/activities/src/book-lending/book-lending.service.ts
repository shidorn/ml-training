import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddBookDto } from './dto/add-book.dto';
import { EditBookDto } from './dto/edit-book.dto';

@Injectable()
export class BookLendingService {
  constructor(private readonly prisma: PrismaService) {}

  async addBook(addBookDto: AddBookDto) {
    try {
      return await this.prisma.book.create({
        data: addBookDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAllBooks() {
    return this.prisma.book.findMany();
  }

  async findBook(id: number) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async borrowBook(id: number, editBoodDto: EditBookDto) {
    editBoodDto.borrowed = true;
    return this.prisma.book.update({
      where: { id },
      data: editBoodDto,
    });
  }

  async returnBook(id: number) {
    return this.prisma.book.update({
      where: { id: id },
      data: {
        borrowed: false,
        userId: null,
        dueDate: null,
      },
    });
  }

  async findAllBorrowedBooks() {
    return this.prisma.book.findMany({
      where: {
        borrowed: true,
      },
    });
  }

  async findOverdueBooks() {
    const now = new Date();
    return this.prisma.book.findMany({
      where: {
        borrowed: true,
        dueDate: {
          lt: now,
        },
      },
    });
  }
}
