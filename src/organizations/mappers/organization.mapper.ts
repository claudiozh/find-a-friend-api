import { randomUUID } from 'crypto';

import { CreateOrganizationDTO } from '@/organizations/dtos/create-organization.dto';
import { Organization } from '@/organizations/entities/organization';

export const mapCreateOrganizationDtoToEntity = async (dto: CreateOrganizationDTO): Promise<Organization> => {
  return {
    id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    responsibleName: dto.responsibleName,
    email: dto.email,
    passwordHash: dto.password,
    whatsapp: dto.whatsapp,
    addressCity: dto.address.city,
    addressState: dto.address.state,
    addressNeighborhood: dto.address.neighborhood,
    addressStreet: dto.address.street,
    addressNumber: dto.address.number,
    addressComplement: dto.address.complement,
    addressZipCode: dto.address.zipCode,
  };
};
