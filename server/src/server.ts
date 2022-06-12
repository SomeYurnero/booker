import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import pgClient from './db.js';

// Running dotenv to get access to environment variables
dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Connecting to heroku postgresql database
pgClient.connect(error => {
    console.log('Database successfully connected');
});

// Starting server
server.listen().then(data => {
    console.log(`Server is running at ${data.url}`);
});