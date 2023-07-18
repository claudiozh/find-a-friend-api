import { validate } from 'class-validator';

import { BrazilStatesEnum } from '@/core/enums/brazil-states.enum';
import { CreateOrganizationDTO } from '@/organizations/dtos/create-organization.dto';
import { InMemoryOrganizationsRepository } from '@/organizations/repositories/in-memory/in-memory-organizations.repository';
import { CreateOrganizationUseCase } from '@/organizations/use-cases/create-organization/create-organization.usecase';

let sut: CreateOrganizationUseCase;
let organizationsRepository: InMemoryOrganizationsRepository;

describe('Create Organization Use Case', () => {
  beforeEach(async () => {
    organizationsRepository = new InMemoryOrganizationsRepository();
    sut = new CreateOrganizationUseCase(organizationsRepository);
  });

  it('should be able create a new organization', async () => {
    // const organizationDTO = new CreateOrganizationDTO();

    // organizationDTO.responsibleName = 'any_name';
    // organizationDTO.whatsapp = 'any_whatsapp';
    // organizationDTO.email = 'any_email';
    // organizationDTO.password = 'any_password';
    // organizationDTO.address = {
    //   city: 'any_city',
    //   neighborhood: 'any_neighborhood',
    //   number: 'any_number',
    //   state: BrazilStatesEnum.RN,
    //   street: 'any_street',
    //   zipCode: 'any_zip_code',
    //   complement: 'any_complement',
    // };

    // const errors = await validate(organizationDTO);
    // expect(errors.length).toBe(0);

    const result = await sut.execute({
      createOrganizationDTO: {
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
    });

    expect(result.organization).toHaveProperty('id');
    expect(result.organization).toHaveProperty('createdAt');
    expect(result.organization.id).toEqual(expect.any(String));
  });
});
