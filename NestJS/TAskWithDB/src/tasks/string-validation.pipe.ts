// string-validation.pipe.ts
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class StringValidationPipe implements PipeTransform<string, string> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, _metadata: ArgumentMetadata): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Validation failed: Input is not a string');
    }

    // Perform additional validation logic if needed
    if (value.length < 3) {
      throw new BadRequestException(
        'Validation failed: Input length must be at least 3 characters',
      );
    }

    return value;
  }
}
