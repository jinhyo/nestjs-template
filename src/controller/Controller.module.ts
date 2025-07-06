import { Module } from '@nestjs/common';
import { AbcController } from './domain/abc/rest/Abc.controller';
import { ServiceModule } from 'src/service/Service.module';

@Module({
  imports: [ServiceModule],
  controllers: [AbcController],
})
export class ControllerModule {}
