import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbcRepository } from './Abc.repository';
import { AbcOrmEntity } from 'src/entity/Abc.orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbcOrmEntity])],
  providers: [AbcRepository],
  exports: [AbcRepository],
})
export class RepositoryModule {}
