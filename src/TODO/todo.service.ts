import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { ReplaceTaskDto } from './dto/replace-task.dto';

@Injectable()
export class TodoService {
  [x: string]: any;
  deleteCompletedTasks() {
    return this.taskModel.destroy({
      where: { isChecked: true },
    });
  }
  deleteTask(id: number) {
    return this.taskModel.destroy({
      where: { id },
    });
  }
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}
  getTasks() {
    return this.taskModel.findAll();
  }

  createNewTask(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);
  }

  async replaceTask(id: number, updateTaskDto: ReplaceTaskDto): Promise<Task> {
    const [edit, [editedTask]] = await this.taskModel.update(
      { taskText: updateTaskDto.taskText, isChecked: updateTaskDto.isChecked },
      { where: { id } },
    );
    if (edit === 0) {
      throw new NotFoundException('not succass');
    }
    return editedTask;
  }
}
