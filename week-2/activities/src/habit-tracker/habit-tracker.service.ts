import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateHabitDto } from './dto/create-habit.dto';
// import { CreateLogDto } from './dto/create-log.dto';

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

  //add habit
  async addHabit(createHabitDto: CreateHabitDto) {
    try {
      return await this.prisma.habit.create({
        data: createHabitDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  //   //add log habit
  //   async addLog(createLogDto: CreateLogDto) {
  //     try {
  //       return await this.prisma.log.create({
  //         data: createLogDto,
  //       });
  //     } catch (error) {
  //       return error.message;
  //     }
  //   }
}
