import { Test, TestingModule } from '@nestjs/testing';
import { HabitTrackerController } from './habit-tracker.controller';

describe('HabitTrackerController', () => {
  let controller: HabitTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitTrackerController],
    }).compile();

    controller = module.get<HabitTrackerController>(HabitTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
