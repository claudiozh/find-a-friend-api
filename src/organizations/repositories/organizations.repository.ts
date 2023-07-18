import { Organization } from '@/organizations/entities/organization';

export abstract class OrganizationsRepository {
  abstract findAll(): Promise<Organization[]>;
  abstract findOneById(id: string): Promise<Organization>;
  abstract create(organization: Organization): Promise<Organization>;
  abstract update(id: string, organization: Partial<Omit<Organization, 'id'>>): Promise<Organization>;
}
