import { users } from './testData.js';

const resolvers = {
    Query: {
        user: () => users
    }
};

export default resolvers;