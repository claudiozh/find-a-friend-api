export class Organization {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  responsibleName: string;
  email: string;
  whatsapp: string;
  passwordHash: string;

  addressCity: string;
  addressState: string;
  addressNeighborhood: string;
  addressStreet: string;
  addressNumber: string;
  addressComplement: string;
  addressZipCode: string;
}
