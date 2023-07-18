import { Organization } from '@/organizations/entities/organization';

export abstract class OrganizationsRepository {
  abstract findAll(): Promise<Organization[] | []>;
  abstract findOneById(id: string): Promise<Organization | undefined>;
  abstract findOneByEmail(email: string): Promise<Organization | undefined>;
  abstract create(organization: Organization): Promise<Organization | undefined>;
  abstract update(id: string, organization: Partial<Omit<Organization, 'id'>>): Promise<Organization | undefined>;
}
