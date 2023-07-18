import { Module } from '@nestjs/common';

import { PetsModule } from '@/pets/pets.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PetsModule, OrganizationsModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
