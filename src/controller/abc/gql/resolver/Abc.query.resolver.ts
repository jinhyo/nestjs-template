import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AbcQueryResolver {
  @Query(() => String)
  test() {
    return 'abc';
  }
}
