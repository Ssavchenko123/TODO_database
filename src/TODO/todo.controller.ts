import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { ReplaceTaskDto } from './dto/replace-task.dto';
import { ReplaceCheckboxDto } from './dto/replace-checkbox.dto';
import { CreateTaskDto } from './dto/create-task.dto';

import { TodoService } from './todo.service';
import { Task } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.todoService.getTasks();
  }
  @Delete(':id')
  deleteTaskByID(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.todoService.deleteTask(id);
  }

  @Delete('isChecked')
  deleteAllCompleted(): Promise<string> {
    return this.todoService.deleteCompletedTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.todoService.createNewTask(createTaskDto);
  }
  @Patch(':id')
  replaceTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: ReplaceTaskDto,
  ): Promise<Task> {
    return this.todoService.replaceTask(id, updateTaskDto);
  }

  @Patch()
  replaceCheckbox(
    @Body() updateCheckboxDto: ReplaceCheckboxDto,
  ): Promise<string> {
    return this.todoService.replaceTaskCheckbox(updateCheckboxDto);
  }
}
