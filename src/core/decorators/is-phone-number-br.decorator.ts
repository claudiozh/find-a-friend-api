import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

const PHONE_FORMAT_PATTERN = /^\+55\s\(\d{2}\)\s\d{4,5}-\d{4}$/;

@ValidatorConstraint({ name: 'IsPhoneNumberBr' })
export class IsPhoneNumberBrConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return PHONE_FORMAT_PATTERN.test(value);
  }

  defaultMessage(): string {
    return 'Ops! número de telefone inválido';
  }
}

export function IsPhoneNumberBr(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsPhoneNumberBrConstraint,
    });
  };
}
