import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('Home page!');
});

const port = process.env.PORT | 4000;
app.listen({ port }, () =>
  console.log(`Listening on http://localhost:${port}/graphql`)
);
