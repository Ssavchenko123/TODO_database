import { Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
@Controller('TODO')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAllTasks() {
    return this.todoService.getTasks();
    // console.log('egrghrth');
  }
  // @Delete()
  // async deleteTask(@Res() res, @Param('taskId') id) {}
  @Post()
  create() {
    return 'This action adds a new task';
  }
}
