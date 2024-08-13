import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ReplaceTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().substring(0, 255))
  taskText: string;
  isChecked?: boolean;
}
