import express from 'express';
import dotenv from 'dotenv';

// Running dotenv to get access to environment variables
dotenv.config();

// Creating an Express application
const app = express();

app.get('/', (req, res) => {
    res.send('Booker Server');
});

export default app;