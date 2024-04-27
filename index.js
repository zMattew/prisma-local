import { createServer } from 'prisma-accelerate-local';

const server = createServer({
  datasourceUrl: 'postgresql://postgres:password@localhost:5432/postgres',
})
  .listen({ port: 4000 })
  .then((url) => console.log(`🚀  Server ready at ${url} `));