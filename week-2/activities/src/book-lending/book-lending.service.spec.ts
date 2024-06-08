import { Test, TestingModule } from '@nestjs/testing';
import { BookLendingService } from './book-lending.service';

describe('BookLendingService', () => {
  let service: BookLendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookLendingService],
    }).compile();

    service = module.get<BookLendingService>(BookLendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
