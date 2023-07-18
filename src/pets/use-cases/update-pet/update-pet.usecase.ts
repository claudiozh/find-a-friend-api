import { UpdatePetDTO } from '@/pets/dtos/update-pet.dto';
import { Pet } from '@/pets/entities/pet.entity';
import { mapUpdatePetDtoToEntity } from '@/pets/mappers/pet.mapper';
import { PetsRepository } from '@/pets/repositories/pets.repository';

interface IUpdatePetUseCaseInput {
  id: string;
  updatePetDto: UpdatePetDTO;
}

interface IUpdatePetUseCaseOutput {
  pet: Pet;
}

export class UpdatePetUseCase {
  constructor(private readonly petsRepository: PetsRepository) {}

  async execute({ id, updatePetDto }: IUpdatePetUseCaseInput): Promise<IUpdatePetUseCaseOutput> {
    const pet = await this.petsRepository.findOneById(id);

    if (!pet) {
      throw new Error('Pet not found');
    }

    const updatePet = mapUpdatePetDtoToEntity(updatePetDto);
    const updatedPet = await this.petsRepository.update(id, updatePet);

    return {
      pet: updatedPet,
    };
  }
}
