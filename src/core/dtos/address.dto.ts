import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

import { IsCEP } from '@/core/decorators/is-cep.decorator';
import { IsNotBlank } from '@/core/decorators/is-not-blank.decorator';
import { BrazilStatesEnum } from '@/core/enums/brazil-states.enum';

export class AddressDto {
  @IsCEP()
  @IsNotBlank()
  zipCode: string;

  @MaxLength(255)
  @IsNotBlank()
  street: string;

  @IsString()
  number: string;

  @MaxLength(30)
  @IsString()
  @IsOptional()
  complement?: string;

  @MaxLength(255)
  @IsNotBlank()
  neighborhood: string;

  @MaxLength(255)
  @IsNotBlank()
  city: string;

  @IsEnum(BrazilStatesEnum)
  state: BrazilStatesEnum;
}

export class AddressUpdateDto extends PartialType(AddressDto) {}
