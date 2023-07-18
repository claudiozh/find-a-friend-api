import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { AddressDto } from '@/core/dtos/address.dto';

export class CreateOrganizationDTO {
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  responsibleName: string;

  @IsEmail()
  email: string;

  @MaxLength(11)
  @IsString()
  whatsapp: string;

  @MinLength(6)
  @IsString()
  password: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
