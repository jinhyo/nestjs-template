import { Module } from '@nestjs/common';
import { AbcServiceModule } from './domain/abc/Abc.service.module';

@Module({
  imports: [AbcServiceModule],
  exports: [AbcServiceModule],
})
export class ServiceModule {}
