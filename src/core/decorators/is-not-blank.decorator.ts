import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsNotBlank' })
export class IsNotBlanckConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return typeof value === 'string' && value.trim().length > 0;
  }

  defaultMessage(): string {
    return 'Ops! campo não pode ficar em branco';
  }
}

export function IsNotBlank(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsNotBlanckConstraint,
    });
  };
}
