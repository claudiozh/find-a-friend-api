import { isCEP } from 'brazilian-values';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

const CEP_FORMAT_PATTERN = /^(\d{2}\.?\d{3}\-\d{3})$/;

@ValidatorConstraint({ name: 'IsCEP' })
export class IsCEPConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    const isFormatCEP = CEP_FORMAT_PATTERN.test(value);
    return isCEP(value) && isFormatCEP;
  }

  defaultMessage(): string {
    return 'Ops! campo não é um cep com formato válido';
  }
}

export function IsCEP(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsCEPConstraint,
    });
  };
}
