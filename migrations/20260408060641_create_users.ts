import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR (100) NOT NULL
        )    
    `);
}

export async function down(knex: Knex): Promise<void> {
     return knex.raw(`
        DROP TABLE users
    `);
}
