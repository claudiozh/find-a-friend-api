import { Organization } from '@/organizations/entities/organization';
import { OrganizationsRepository } from '@/organizations/repositories/organizations.repository';

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  private items: Organization[] = [];

  async findAll(): Promise<Organization[]> {
    throw new Error('Method not implemented.');
  }

  async findOneById(id: string): Promise<Organization> {
    throw new Error('Method not implemented.');
  }

  async create(organization: Organization): Promise<Organization> {
    this.items.push(organization);

    return organization;
  }

  async update(id: string, organization: Partial<Omit<Organization, 'id'>>): Promise<Organization> {
    throw new Error('Method not implemented.');
  }
}
