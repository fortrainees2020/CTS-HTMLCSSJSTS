/*export class CreateTaskDTO {
  title: string;
  description;
}*/

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  description: string;
}
