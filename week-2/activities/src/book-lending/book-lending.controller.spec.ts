import { Test, TestingModule } from '@nestjs/testing';
import { BookLendingController } from './book-lending.controller';

describe('BookLendingController', () => {
  let controller: BookLendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookLendingController],
    }).compile();

    controller = module.get<BookLendingController>(BookLendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
