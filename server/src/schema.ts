import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        user: User
    }

    type User {
        name: String
        age: Int
    }
`;

export default typeDefs;