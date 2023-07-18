import { SizeEnum, BreedEnum, AnimalAgeEnum, EnergyLevelEnum, LevelOfIndependenceEnum } from '@/pets/enums';
import { InMemoryPetsRepository } from '@/pets/repositories/in-memory/in-memory-pets.repository';
import { CreatePetUseCase } from '@/pets/use-cases/create-pet/create-pet.usecase';

let sut: CreatePetUseCase;
let petsRepository: InMemoryPetsRepository;

describe('Create Pet Use Case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository();
    sut = new CreatePetUseCase(petsRepository);
  });

  it('should be able create a new pet', async () => {
    const result = await sut.execute({
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

    expect(result.pet).toHaveProperty('id');
    expect(result.pet).toHaveProperty('createdAt');
    expect(result.pet.id).toEqual(expect.any(String));
  });
});
