import { ConflictException } from '@nestjs/common';

import { validateDTO } from '@/core/utils/validate-dto';
import { CreateOrganizationDTO } from '@/organizations/dtos/create-organization.dto';
import { Organization } from '@/organizations/entities/organization';
import { mapCreateOrganizationDtoToEntity } from '@/organizations/mappers/organization.mapper';
import { OrganizationsRepository } from '@/organizations/repositories/organizations.repository';

interface ICreateOrganizationUseCaseInput {
  createOrganization: CreateOrganizationDTO;
}

interface ICreateOrganizationUseCaseOutput {
  organization: Organization;
}

export class CreateOrganizationUseCase {
  constructor(private readonly organizationsRepository: OrganizationsRepository) {}

  async execute({ createOrganization }: ICreateOrganizationUseCaseInput): Promise<ICreateOrganizationUseCaseOutput> {
    await validateDTO(CreateOrganizationDTO, createOrganization);

    const organizationWithSameEmail = await this.organizationsRepository.findOneByEmail(createOrganization.email);

    if (organizationWithSameEmail) {
      throw new ConflictException('Ops! Já existe organização com esse email');
    }

    const organizationEntity = await mapCreateOrganizationDtoToEntity(createOrganization);
    const createdOrganization = await this.organizationsRepository.create(organizationEntity);

    return {
      organization: createdOrganization,
    };
  }
}
