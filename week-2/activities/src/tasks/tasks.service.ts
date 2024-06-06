import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      createTaskDto.createdAt = new Date();
      return await this.prisma.tasks.create({
        data: createTaskDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.tasks.findMany({ where: { deletedAt: null } });
    } catch (error) {
      return error.message;
    }
  }

  async fineOne(id: number) {
    try {
      return await this.prisma.tasks.findUnique({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDto: UpdateTaskDto) {
    try {
      updateUserDto.updatedAt = new Date();
      return await this.prisma.tasks.update({
        where: { id, deletedAt: null },
        data: updateUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.tasks.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      });
    } catch (error) {
      return error.message;
    }
  }
}
