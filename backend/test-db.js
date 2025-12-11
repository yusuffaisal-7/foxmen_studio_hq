require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: true
    }
});

client.connect()
    .then(() => {
        console.log('Connected successfully to DB!');
        return client.end();
    })
    .catch(err => {
        console.error('Connection error:', err);
        process.exit(1);
    });
