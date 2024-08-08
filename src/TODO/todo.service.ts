import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
@Injectable()
export class TodoService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}
  getTasks() {
    return this.taskModel.findAll();
  }
}
