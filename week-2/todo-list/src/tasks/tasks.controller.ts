import {
  Delete,
  Get,
  Body,
  Controller,
  Post,
  Patch,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findMany() {
    return this.tasksService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    console.log(id);
    console.log(updateTaskDto);
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.delete(+id);
  }
}
