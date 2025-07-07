const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');

async function generateTypings() {
  console.log(
    '----------------------------------------------------------------------------------------------------',
  );
  console.log(
    'Start creating classes according to graphql schema defined in each modules...',
  );

  const coreGqlPath = join(process.cwd(), './core.gql');
  const domainGqlPath = join(
    process.cwd(),
    'src/controller/**/gql/schema/**/*.gql',
  );

  const definitionsFactory = new GraphQLDefinitionsFactory();
  await definitionsFactory.generate({
    typePaths: [coreGqlPath, domainGqlPath],
    path: join(process.cwd(), './src/controller/schema.dto.ts'),
    outputAs: 'class',
  });
  console.log(`schmea.dto.ts is successfully generated`);
  console.log(
    '----------------------------------------------------------------------------------------------------',
  );
}

generateTypings();
