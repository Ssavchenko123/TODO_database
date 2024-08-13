import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().substring(0, 255))
  taskText: string;
}
