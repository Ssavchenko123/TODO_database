import { Injectable } from '@nestjs/common';
import { tasks } from 'src/Moks/Task';
@Injectable()
export class TodoService {
  getTasks() {
    return tasks;
  }
}
