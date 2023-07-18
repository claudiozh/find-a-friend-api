import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';

import { AnimalAgeEnum } from '@/pets/enums/animal-age.enum';
import { BreedEnum } from '@/pets/enums/breed.enum';
import { EnergyLevelEnum } from '@/pets/enums/energy-level.enum';
import { LevelOfIndependenceEnum } from '@/pets/enums/level-of-independence.enum';
import { SizeEnum } from '@/pets/enums/size.enum';

export class CreatePetDTO {
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  name: string;

  @MaxLength(255)
  @MinLength(2)
  @IsString()
  about: string;

  @IsEnum(BreedEnum)
  breed: BreedEnum;

  @IsEnum(AnimalAgeEnum)
  age: AnimalAgeEnum;

  @IsEnum(LevelOfIndependenceEnum)
  levelOfIndependence: LevelOfIndependenceEnum;

  @IsEnum(SizeEnum)
  size: SizeEnum;

  @IsEnum(EnergyLevelEnum)
  energyLevel: EnergyLevelEnum;
}
