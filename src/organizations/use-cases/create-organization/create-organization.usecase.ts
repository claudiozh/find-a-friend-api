import { validate } from 'class-validator';

import { CreateOrganizationDTO } from '@/organizations/dtos/create-organization.dto';
import { Organization } from '@/organizations/entities/organization';
import { mapCreateOrganizationDtoToEntity } from '@/organizations/mappers/organization.mapper';
import { OrganizationsRepository } from '@/organizations/repositories/organizations.repository';

interface ICreateOrganizationUseCaseInput {
  createOrganizationDTO: CreateOrganizationDTO;
}

interface ICreateOrganizationUseCaseOutput {
  organization: Organization;
}

export class CreateOrganizationUseCase {
  constructor(private readonly organizationsRepository: OrganizationsRepository) {}

  async validateInput(createOrganizationDTO: CreateOrganizationDTO): Promise<void> {
    const dto = new CreateOrganizationDTO();

    for (const key in createOrganizationDTO) {
      dto[key] = createOrganizationDTO[key];
    }

    const errors = await validate(dto);

    if (errors.length > 0) {
      console.log(errors[0]);
      throw new Error(errors[0].value);
    }
  }

  async execute({ createOrganizationDTO }: ICreateOrganizationUseCaseInput): Promise<ICreateOrganizationUseCaseOutput> {
    await this.validateInput(createOrganizationDTO);

    const organizationEntity = await mapCreateOrganizationDtoToEntity(createOrganizationDTO);
    const createdOrganization = await this.organizationsRepository.create(organizationEntity);

    return {
      organization: createdOrganization,
    };
  }
}
