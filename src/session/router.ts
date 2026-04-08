import express from 'express';

import { HttpError, route } from 'lib/express-utils';
import { db } from 'lib/knex';

import { createJWT, readJWT } from 'lib/security';

const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a) + a);
const randOf = <T,>(s: T[]) => s.at(rand(0, s.length)) as T;
const fill = <T,>(n: number, p: (i: number) => T) => new Array(n).fill(0).map((_, i) => p(i));
const createCode = () => fill(6, () => randOf('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''))).join('');

const router = express.Router();

router.post('/', route(async (req) => {
    const { email, code } = req.body;

    if (!email) {
        throw new HttpError(400, 'invalid_email');
    }

    // Первый запрос, у нас нет кода
    if (!code) {
        const codeToSend = createCode();
        
        await db.insert({ email, code: codeToSend }).into('user_codes');

        // Здесь будем отправлять письма
        console.log(`Attempt to login with ${email}, use code ${codeToSend}`);

        return null;
    }

    // Второй запрос, есть и мыло и код
    const codeToCheck = await db.select('*').from('user_codes').where({ email, code }).first();

    if (!codeToCheck) {
        throw new HttpError(400, 'invalid_code');
    }

    const emailToLoginWith = codeToCheck.email;

    if (!emailToLoginWith) {
        throw new HttpError(500, 'invalid_email_by_code');
    }

    // Ищем юзера
    let user = await db.select('*').from('users').where({ email }).first();

    if (!user) {
        user = await db.insert({ email }).into('users').returning('*');
    }

    // Создаем JWT с этими данными сроком неделя
    const token = await createJWT(user, 60 * 60 * 24 * 7);

    if (!token) {
        throw new HttpError(500, 'cannot_create_token');
    }

    return token;
}));

router.get('/', route(async (req) => {
    const token = req.get('Authorization');

    if (!token) {
        throw new HttpError(403, 'unauthorized');
    }

    const data = await readJWT<{ email: string }>(token);

    if (!data) {
        throw new HttpError(403, 'malformed_jwt');
    }

    return data;
}));

export default router;