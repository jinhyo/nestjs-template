import { Injectable } from '@nestjs/common';
import { AbcOrmEntity } from 'src/entity/Abc.orm.entity';
import { AbcRepository } from 'src/repository/abc/Abc.repository';

@Injectable()
export class GetAbcByIdHandler {
  constructor(private readonly abcRepository: AbcRepository) {}

  async handle(id: number): Promise<AbcOrmEntity | null> {
    console.log('🚀 ~ GetAbcByIdHandler ~ handle ~ id:', id);
    console.log(
      '🚀 ~ GetAbcByIdHandler ~ handle ~ this.abcRepository:',
      this.abcRepository,
    );
    return await this.abcRepository.findOneById(id);
  }
}
