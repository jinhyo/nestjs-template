import { BaseOrmRepository } from 'src/base/database/Base.repository';
import { AbcOrmEntity } from 'src/entity/Abc.orm.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AbcRepository extends BaseOrmRepository<AbcOrmEntity> {
  constructor(
    @InjectRepository(AbcOrmEntity)
    repository: Repository<AbcOrmEntity>,
  ) {
    super(repository);
  }
}
