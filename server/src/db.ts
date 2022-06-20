import pg from 'pg';
import dotenv from 'dotenv';

// Running dotenv to get access to environment variables
dotenv.config();

export const pgClient = new pg.Client({
    ssl: {
        rejectUnauthorized: false
    }
});

export default pgClient;