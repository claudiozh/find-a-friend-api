import { ConflictException } from '@nestjs/common';

import { validateDTO } from '@/core/utils/validate-dto';
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

  async execute({ createOrganizationDTO }: ICreateOrganizationUseCaseInput): Promise<ICreateOrganizationUseCaseOutput> {
    await validateDTO({ dtoClass: CreateOrganizationDTO, dtoObject: createOrganizationDTO });

    const organizationWithSameEmail = await this.organizationsRepository.findOneByEmail(createOrganizationDTO.email);

    if (organizationWithSameEmail) {
      throw new ConflictException('Ops! Já existe organização com esse email');
    }

    const organizationEntity = await mapCreateOrganizationDtoToEntity(createOrganizationDTO);
    const createdOrganization = await this.organizationsRepository.create(organizationEntity);

    return {
      organization: createdOrganization,
    };
  }
}
