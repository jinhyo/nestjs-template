import { BaseDateOrmEntity } from 'src/base/database/BaseDate.orm.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'abc' })
export class AbcOrmEntity extends BaseDateOrmEntity {
  @Column()
  name: string;

  @Column()
  description: number;
}
