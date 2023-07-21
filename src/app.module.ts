import { Module } from '@nestjs/common';

import { CoreModule } from '@/core/core.module';
import { OrganizationsModule } from '@/organizations/organizations.module';
import { PetsModule } from '@/pets/pets.module';

@Module({
  imports: [PetsModule, OrganizationsModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
