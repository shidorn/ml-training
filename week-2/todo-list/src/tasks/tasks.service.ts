import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      console.log(createTaskDto);
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
      return await this.prisma.tasks.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      updateTaskDto.updatedAt = new Date();
      return await this.prisma.tasks.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.tasks.delete({
        where: { id },
      });
    } catch (error) {
      return error.message;
    }
  }
}
