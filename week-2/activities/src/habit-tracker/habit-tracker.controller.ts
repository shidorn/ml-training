import { Post, Body, Controller } from '@nestjs/common';
import { HabitTrackerService } from './habit-tracker.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddGoalDto } from './dto/add-goal.dto';
import { AddProgressDto } from './dto/add-progress.dto';
import { AddHabitDto } from './dto/add-habit.dto';

@Controller('habitTracker')
export class HabitTrackerController {
  constructor(private readonly habitTrackerService: HabitTrackerService) {}

  //add User
  @Post('/user')
  addUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.habitTrackerService.addUser(createUserDto);
  }

  //add Goal
  @Post('/goal')
  addGoal(@Body() addGoalDto: AddGoalDto) {
    console.log(addGoalDto);
    return this.habitTrackerService.addGoal(addGoalDto);
  }

  //add Habit
  @Post('/habit')
  AddHabit(@Body() addHabitDto: AddHabitDto) {
    console.log(addHabitDto);
    return this.habitTrackerService.addHabit(addHabitDto);
  }

  //add Progress
  @Post('/progress')
  addProgress(@Body() addProgressDto: AddProgressDto) {
    return this.habitTrackerService.addProgress(addProgressDto);
  }
}
