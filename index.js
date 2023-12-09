import { createServer } from "http"
import { createSchema, createYoga } from "graphql-yoga"
import resolvers from "./graphql/resolvers.js";
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

createServer(
  createYoga({
    schema: createSchema({
      typeDefs: fs.readFileSync(
        path.join(path.dirname(fileURLToPath(import.meta.url)), '/graphql/schema.graphql'),
        'utf-8'
      ),
      resolvers
    }),
  })
).listen(4000, () => {
  console.info("GraphQL Yoga is listening on http://localhost:4000/graphql")
})