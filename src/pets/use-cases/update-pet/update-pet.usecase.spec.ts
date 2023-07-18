import { SizeEnum, BreedEnum, AnimalAgeEnum, EnergyLevelEnum, LevelOfIndependenceEnum } from '@/pets/enums';
import { InMemoryPetsRepository } from '@/pets/repositories/in-memory/in-memory-pets.repository';
import { CreatePetUseCase } from '@/pets/use-cases/create-pet/create-pet.usecase';
import { UpdatePetUseCase } from '@/pets/use-cases/update-pet/update-pet.usecase';

let sut: UpdatePetUseCase;
let createPetUseCase: CreatePetUseCase;
let petsRepository: InMemoryPetsRepository;

describe('Update Pet Use Case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository();
    createPetUseCase = new CreatePetUseCase(petsRepository);
    sut = new UpdatePetUseCase(petsRepository);
  });

  it('should be able update a pet', async () => {
    const { pet } = await createPetUseCase.execute({
      createPetDto: {
        name: 'any_name',
        about: 'any_about',
        age: AnimalAgeEnum.YOUNG,
        breed: BreedEnum.BULLDOG,
        energyLevel: EnergyLevelEnum.HIGH,
        levelOfIndependence: LevelOfIndependenceEnum.MEDIUM,
        size: SizeEnum.SMALL,
      },
    });

    const result = await sut.execute({
      id: pet.id,
      updatePetDto: {
        name: 'any_name',
        about: 'any_about',
        age: AnimalAgeEnum.ADULT,
      },
    });

    expect(result.pet.id).toBe(pet.id);
    expect(result.pet.age).toBe(AnimalAgeEnum.ADULT);
  });

  it('should not be able update a pet if not exists', async () => {
    await expect(
      sut.execute({
        id: 'any_id',
        updatePetDto: {
          name: 'any_name',
          about: 'any_about',
          age: AnimalAgeEnum.ADULT,
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
