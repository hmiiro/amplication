import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/services/prisma.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { UserModule } from '../user/user.module';
import { EntityModule } from '../entity/entity.module';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { CommitResolver } from './commit.resolver';

@Module({
  imports: [PrismaModule, PermissionsModule, UserModule, EntityModule],
  providers: [AppService, AppResolver, CommitResolver],
  exports: [AppService, AppResolver, CommitResolver]
})
export class AppModule {}
