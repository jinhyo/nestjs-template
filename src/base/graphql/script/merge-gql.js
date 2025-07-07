const { join } = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');
const fs = require('fs');

const distPath = join(process.cwd(), 'dist');

const coreGqlPath = join(process.cwd(), '../core.gql');
const domainGqlPath = join(
  process.cwd(),
  'src/controller/**/gql/schema/**/*.gql',
);

const typesArray = loadFilesSync([coreGqlPath, domainGqlPath]);
const typeDefs = mergeTypeDefs(typesArray);

if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);
fs.writeFileSync(join(distPath, 'schema.gql'), print(typeDefs));
