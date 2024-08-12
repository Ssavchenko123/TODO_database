import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MaxLength(255)
  taskText: string;
  @IsBoolean()
  isChecked: boolean;
}
