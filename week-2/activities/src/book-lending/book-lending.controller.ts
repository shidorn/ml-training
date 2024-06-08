import { Param, Get, Post, Body, Controller, Patch } from '@nestjs/common';
import { BookLendingService } from './book-lending.service';
import { AddBookDto } from './dto/add-book.dto';
import { EditBookDto } from './dto/edit-book.dto';

@Controller('bookLending')
export class BookLendingController {
  constructor(private readonly bookLendingService: BookLendingService) {}

  @Post()
  add(@Body() addBookDto: AddBookDto) {
    console.log(addBookDto);
    return this.bookLendingService.addBook(addBookDto);
  }

  @Get()
  findMany() {
    return this.bookLendingService.findAllBooks();
  }

  @Get('book/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.bookLendingService.findBook(+id);
  }

  @Patch('borrow/:id')
  borrowBook(@Param('id') id: string, @Body() editBookDto: EditBookDto) {
    editBookDto.dueDate = new Date(editBookDto.dueDate);

    return this.bookLendingService.borrowBook(+id, editBookDto);
  }

  @Patch('return/:id')
  returnBook(@Param('id') id: string) {
    return this.bookLendingService.returnBook(+id);
  }

  @Get('borrowedBooks')
  borrowedBooks() {
    return this.bookLendingService.findAllBorrowedBooks();
  }

  @Get('overdueBooks')
  overdueBooks() {
    return this.bookLendingService.findOverdueBooks();
  }
}
