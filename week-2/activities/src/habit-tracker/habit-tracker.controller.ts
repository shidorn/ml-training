import { Post, Body, Controller } from '@nestjs/common';
import { HabitTrackerService } from './habit-tracker.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateHabitDto } from './dto/create-habit.dto';
// import { CreateLogDto } from './dto/create-log.dto';

@Controller('habitTracker')
export class HabitTrackerController {
  constructor(private readonly habitTrackerService: HabitTrackerService) {}

  //add User
  @Post('/user')
  addUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.habitTrackerService.addUser(createUserDto);
  }

  //add Habit
  @Post('/habit')
  addHabit(@Body() createHabitDto: CreateHabitDto) {
    console.log(createHabitDto);
    return this.habitTrackerService.addHabit(createHabitDto);
  }

  //add Log
  //   @Post('/log')
  //   addLog(@Body() createLogDto: CreateLogDto) {
  //     console.log(createLogDto);
  //     return this.habitTrackerService.addLog(createLogDto);
  //   }
}
