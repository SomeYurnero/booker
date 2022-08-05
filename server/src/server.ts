import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import pgClient from './db.js';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Connecting to heroku postgresql database
pgClient.connect(error => {
    if (error) return console.log('Database connection failed');
    console.log('Database successfully connected');
});

// Starting server
server.listen(process.env.PORT).then(data => {
    console.log(`Server is running at ${data.url}`);
});