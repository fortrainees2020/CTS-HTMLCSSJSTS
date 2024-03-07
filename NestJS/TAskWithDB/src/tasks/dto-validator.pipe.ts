// create-task-validation.pipe.ts
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateTaskDTO } from './create-task.dto';

@Injectable()
export class CreateTaskValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (metatype !== CreateTaskDTO) {
      // If the metatype is not CreateTaskDto, return the value as is
      return value;
    }
    /* plainToClass() is a utility function provided by the class-transformer
 library in TypeScript. It is used to convert a plain JavaScript object 
 (plain object) into an instance of a class by applying decorators and 
 validation rules defined on the class.*/

    const dtoObject = plainToClass(metatype, value);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      // If validation errors exist, throw a BadRequestException with the validation errors
      const errorMessage = errors
        .map((error) => Object.values(error.constraints))
        .join(', ');
      throw new BadRequestException(errorMessage);
    }
    return value;
  }
}
