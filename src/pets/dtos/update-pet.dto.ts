import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { AnimalAgeEnum } from '@/pets/enums/animal-age.enum';
import { BreedEnum } from '@/pets/enums/breed.enum';
import { EnergyLevelEnum } from '@/pets/enums/energy-level.enum';
import { LevelOfIndependenceEnum } from '@/pets/enums/level-of-independence.enum';
import { SizeEnum } from '@/pets/enums/size.enum';

export class UpdatePetDTO {
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @IsOptional()
  name?: string;

  @MaxLength(255)
  @MinLength(2)
  @IsString()
  @IsOptional()
  about?: string;

  @IsEnum(BreedEnum)
  @IsOptional()
  breed?: BreedEnum;

  @IsEnum(AnimalAgeEnum)
  @IsOptional()
  age?: AnimalAgeEnum;

  @IsEnum(LevelOfIndependenceEnum)
  @IsOptional()
  levelOfIndependence?: LevelOfIndependenceEnum;

  @IsEnum(SizeEnum)
  @IsOptional()
  size?: SizeEnum;

  @IsEnum(EnergyLevelEnum)
  @IsOptional()
  energyLevel?: EnergyLevelEnum;
}
