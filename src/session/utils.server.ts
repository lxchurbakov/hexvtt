import express from 'express';

import { db } from 'lib/knex';
import { readJWT } from 'lib/security';
import { HttpError } from 'lib/express-utils';

export const getUser = async (req: express.Request) => {
    const token = req.get('Authorization');
    
    if (!token) {
        throw new HttpError(403, 'unauthorized');
    }

    const data = await readJWT<{ email: string, id: number }>(token);

    if (!data) {
        throw new HttpError(403, 'malformed_jwt');
    }

    const { email, id } = data;

    if (!email || !id) {
        throw new HttpError(403, 'malformed_jwt');
    }

    const user = await db('users').select('*').where({ email, id }).first();

    if (!user) {
        throw new HttpError(403, 'unauthorized');
    }

    return user;
};
