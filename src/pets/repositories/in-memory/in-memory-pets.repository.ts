import { Pet } from '@/pets/entities/pet.entity';
import { PetsRepository } from '@/pets/repositories/pets.repository';

export class InMemoryPetsRepository implements PetsRepository {
  private items: Pet[] = [];

  async create(pet: Pet): Promise<Pet> {
    this.items.push(pet);

    return pet;
  }

  async findAll(): Promise<Pet[]> {
    return this.items;
  }

  async findOneById(id: string): Promise<Pet> {
    return this.items.find((item) => item.id === id);
  }

  async update(id: string, pet: Omit<Pet, 'id'>): Promise<Pet> {
    const petIndex = this.items.findIndex((item) => item.id === id);

    this.items[petIndex] = {
      id,
      ...pet,
    };

    return this.items[petIndex];
  }
}
