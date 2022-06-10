import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

// // Running dotenv to get access to environment variables
dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(data => {
    console.log(data);
});