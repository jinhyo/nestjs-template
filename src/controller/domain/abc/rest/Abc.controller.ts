import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { GetAbcByIdHandler } from 'src/service/domain/abc/query/GetAbcById.handler';

@Controller('abc')
export class AbcController {
  constructor(private readonly getAbcByHandler: GetAbcByIdHandler) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getAbcByHandler.handle(+id);
  }

  @Post()
  create(@Body() createAbcDto: any) {
    return { message: 'abc 생성', data: createAbcDto };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAbcDto: any) {
    return { message: `abc ${id} 수정`, data: updateAbcDto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `abc ${id} 삭제` };
  }
}
