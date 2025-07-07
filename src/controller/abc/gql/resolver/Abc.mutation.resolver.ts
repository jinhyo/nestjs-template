import { CreateAbcHandler } from '@application/abc/handler/CreateAbc.handler';
import { AbcResDto } from '@controller/abc/dto/Abc.res.dto';
import { CreateAbcInput } from '@controller/schema.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AbcMutationResolver {
  constructor(private readonly createAbcHandler: CreateAbcHandler) {}

  @Mutation()
  async createAbc(@Args('input') input: CreateAbcInput) {
    const abc = await this.createAbcHandler.handle(
      input.name,
      input.age,
      input.isActive,
    );

    return new AbcResDto(abc);
  }
}
