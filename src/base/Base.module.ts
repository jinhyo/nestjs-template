import { Module } from '@nestjs/common';
import { MyConfigModule } from './config/MyConfig.module';
import { MySqlTypeOrmModule } from './database/MysqlTypeorm.db.module';
import { Global } from '@nestjs/common';

@Global()
@Module({
  imports: [MyConfigModule, MySqlTypeOrmModule],
  exports: [MyConfigModule, MySqlTypeOrmModule],
})
export class BaseModule {}
