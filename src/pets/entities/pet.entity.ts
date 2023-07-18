import { AnimalAgeEnum } from '@/pets/enums/animal-age.enum';
import { BreedEnum } from '@/pets/enums/breed.enum';
import { EnergyLevelEnum } from '@/pets/enums/energy-level.enum';
import { LevelOfIndependenceEnum } from '@/pets/enums/level-of-independence.enum';
import { SizeEnum } from '@/pets/enums/size.enum';
import { PetStatus } from '@/pets/enums/status.enum';

export class Pet {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  about: string;
  age: AnimalAgeEnum;
  status: PetStatus;
  sizeEnum: SizeEnum;
  levelOfIndependence: LevelOfIndependenceEnum;
  energyLevel: EnergyLevelEnum;
  breed: BreedEnum;
}
