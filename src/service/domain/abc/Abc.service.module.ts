import { Module } from '@nestjs/common';
import { GetAbcByIdHandler } from './query/GetAbcById.handler';
import { RepositoryModule } from 'src/repository/abc/Repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [GetAbcByIdHandler],
  exports: [GetAbcByIdHandler],
})
export class AbcServiceModule {}
