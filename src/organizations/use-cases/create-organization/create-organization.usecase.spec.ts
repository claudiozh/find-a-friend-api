import { BadRequestException, ConflictException } from '@nestjs/common';

import { BrazilStatesEnum } from '@/core/enums/brazil-states.enum';
import { CreateOrganizationDTO } from '@/organizations/dtos/create-organization.dto';
import { InMemoryOrganizationsRepository } from '@/organizations/repositories/in-memory/in-memory-organizations.repository';
import { CreateOrganizationUseCase } from '@/organizations/use-cases/create-organization/create-organization.usecase';

let sut: CreateOrganizationUseCase;
let organizationsRepository: InMemoryOrganizationsRepository;

const mockCreateOrganizationDTO: CreateOrganizationDTO = {
  responsibleName: 'John Doe',
  whatsapp: '84999917380',
  email: 'johndoe@gmail.com',
  password: '123456789',
  address: {
    city: 'Portalegre',
    neighborhood: 'Zona Rural',
    number: 'SN',
    state: BrazilStatesEnum.RN,
    street: 'Sitio Belo Monte',
    zipCode: '59920-000',
    complement: 'Casa',
  },
};

describe('Create Organization Use Case', () => {
  beforeEach(async () => {
    organizationsRepository = new InMemoryOrganizationsRepository();
    sut = new CreateOrganizationUseCase(organizationsRepository);
  });

  it('should be able to create a new organization', async () => {
    const result = await sut.execute({
      createOrganization: mockCreateOrganizationDTO,
    });

    expect(result.organization.id).toEqual(expect.any(String));
    expect(result.organization.email).toBe('johndoe@gmail.com');
  });

  it('should not be able to create new organization with existing email', async () => {
    await sut.execute({
      createOrganization: mockCreateOrganizationDTO,
    });

    await expect(async () =>
      sut.execute({
        createOrganization: mockCreateOrganizationDTO,
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('should not be able to create an organization because the dto is invalid', async () => {
    await expect(async () =>
      sut.execute({
        createOrganization: {
          responsibleName: 'any_name',
          whatsapp: 'any_whatsapp',
          email: 'any_email',
          password: 'any_password',
          address: {
            city: 'any_city',
            neighborhood: 'any_neighborhood',
            number: 'any_number',
            state: BrazilStatesEnum.RN,
            street: 'any_street',
            zipCode: 'any_zip_code',
            complement: 'any_complement',
          },
        },
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});
