import { Organization } from '@/organizations/entities/organization';
import { OrganizationsRepository } from '@/organizations/repositories/organizations.repository';

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  private items: Organization[] = [];

  async findAll(): Promise<Organization[]> {
    return this.items;
  }

  async findOneById(id: string): Promise<Organization> {
    return this.items.find((item) => item.id === id);
  }

  async findOneByEmail(email: string): Promise<Organization> {
    return this.items.find((item) => item.email === email);
  }

  async create(organization: Organization): Promise<Organization> {
    this.items.push(organization);

    return organization;
  }

  async update(id: string, pet: Omit<Organization, 'id'>): Promise<Organization> {
    const petIndex = this.items.findIndex((item) => item.id === id);

    this.items[petIndex] = {
      id,
      ...pet,
    };

    return this.items[petIndex];
  }
}
