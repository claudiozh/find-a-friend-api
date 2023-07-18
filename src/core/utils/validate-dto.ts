import { BadRequestException } from '@nestjs/common';
import { ValidationError, validate } from 'class-validator';

type DTOType<T> = { new (): T };

export async function validateDTO<T>(params: {
  dtoClass: DTOType<T>;
  dtoObject: T;
}): Promise<BadRequestException | void> {
  const { dtoClass: DTOClass, dtoObject } = params;
  const dto = new DTOClass();

  for (const key in dtoObject) {
    dto[key] = dtoObject[key];
  }

  const errors: ValidationError[] = await validate(dto as object);

  if (errors.length > 0) {
    const [firstMessageError] = errors.map((error) => Object.values(error.constraints)).flat();

    throw new BadRequestException(firstMessageError);
  }
}
