import { Pet } from '@/pets/entities/pet.entity';

export class PetOutputDto {
  id: string;
  name: string;

  constructor(pet: Pet) {
    this.id = pet.id;
    this.name = pet.name;
  }
}
