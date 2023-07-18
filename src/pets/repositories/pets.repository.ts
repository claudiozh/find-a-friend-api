import { Pet } from '@/pets/entities/pet.entity';

export abstract class PetsRepository {
  abstract findAll(): Promise<Pet[]>;
  abstract findOneById(id: string): Promise<Pet>;
  abstract create(pet: Pet): Promise<Pet>;
  abstract update(id: string, pet: Partial<Omit<Pet, 'id'>>): Promise<Pet>;
}
