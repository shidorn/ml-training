import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddGoalDto } from './dto/add-goal.dto';
import { AddProgressDto } from './dto/add-progress.dto';
import { AddHabitDto } from './dto/add-habit.dto';

@Injectable()
export class HabitTrackerService {
  constructor(private readonly prisma: PrismaService) {}

  //add user
  async addUser(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: createUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async addGoal(addGoalDto: AddGoalDto) {
    try {
      return await this.prisma.goal.create({
        data: addGoalDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async addHabit(addHabitDto: AddHabitDto) {
    try {
      return await this.prisma.habit.create({
        data: addHabitDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async addProgress(addProgressDto: AddProgressDto) {
    try {
      console.log(addProgressDto);
      addProgressDto.date = new Date(addProgressDto.date);
      return await this.prisma.progress.create({
        data: addProgressDto,
      });
    } catch (error) {
      return error.message;
    }
  }
}
