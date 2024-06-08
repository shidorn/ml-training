import { Module } from '@nestjs/common';
import { HabitTrackerService } from './habit-tracker.service';
import { HabitTrackerController } from './habit-tracker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [HabitTrackerService],
  controllers: [HabitTrackerController],
  imports: [PrismaModule],
})
export class HabitTrackerModule {}
