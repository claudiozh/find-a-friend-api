import { randomUUID } from 'crypto';

import { CreatePetDTO } from '@/pets/dtos/create-pet.dto';
import { UpdatePetDTO } from '@/pets/dtos/update-pet.dto';
import { Pet } from '@/pets/entities/pet.entity';
import { PetStatus } from '@/pets/enums/status.enum';

export const mapCreatePetDtoToEntity = (dto: CreatePetDTO): Pet => {
  return {
    id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    status: PetStatus.AVAILABLE,
    name: dto.name,
    about: dto.about,
    age: dto.age,
    sizeEnum: dto.size,
    levelOfIndependence: dto.levelOfIndependence,
    energyLevel: dto.energyLevel,
    breed: dto.breed,
  };
};

export const mapUpdatePetDtoToEntity = (dto: UpdatePetDTO): Partial<Omit<Pet, 'id'>> => {
  return {
    name: dto.name,
    about: dto.about,
    age: dto.age,
  };
};
