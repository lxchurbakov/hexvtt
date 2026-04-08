import { config } from 'dotenv';

config()

export default {
    client: 'pg',
    connection: process.env.DATABASE_URL,
};
