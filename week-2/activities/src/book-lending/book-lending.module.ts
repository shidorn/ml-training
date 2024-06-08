import { Module } from '@nestjs/common';
import { BookLendingService } from './book-lending.service';
import { BookLendingController } from './book-lending.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [BookLendingService],
  controllers: [BookLendingController],
  imports: [PrismaModule],
})
export class BookLendingModule {}
