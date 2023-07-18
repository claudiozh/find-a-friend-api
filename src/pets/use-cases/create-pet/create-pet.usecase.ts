import { CreatePetDTO } from '@/pets/dtos/create-pet.dto';
import { Pet } from '@/pets/entities/pet.entity';
import { mapCreatePetDtoToEntity } from '@/pets/mappers/pet.mapper';
import { PetsRepository } from '@/pets/repositories/pets.repository';

interface ICreatePetUseCaseInput {
  createPetDto: CreatePetDTO;
}

interface ICreatePetUseCaseOutput {
  pet: Pet;
}

export class CreatePetUseCase {
  constructor(private readonly petsRepository: PetsRepository) {}

  async execute({ createPetDto }: ICreatePetUseCaseInput): Promise<ICreatePetUseCaseOutput> {
    const pet = mapCreatePetDtoToEntity(createPetDto);
    const createdPet = await this.petsRepository.create(pet);

    return {
      pet: createdPet,
    };
  }
}
