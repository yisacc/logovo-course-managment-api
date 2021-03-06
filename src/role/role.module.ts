import { Module } from '@nestjs/common';
import { RoleBulkService, RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '../shared/database/database.constant';
import { RoleDatabaseName, RoleEntity, RoleSchema } from './role.schema';

@Module({
  providers: [RoleService, RoleBulkService, RoleResolver],
  exports: [RoleService, RoleBulkService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: RoleEntity.name,
          schema: RoleSchema,
          collection: RoleDatabaseName,
        },
      ],
      DATABASE_CONNECTION_NAME,
    ),
  ],
})
export class RoleModule {}
