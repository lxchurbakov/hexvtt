import express from 'express';
// import jwt from 'jsonwebtoken';
// import { v4 as uuid } from 'uuid';

import { HttpError, route } from 'lib/express-utils';
// import { sendNoPasswordAuthCode } from './mail';
import { createJWT, readJWT } from 'lib/security';
// import { global_map } from 'lib/json-storage';

// import { get, put } from './api';

// const JWT_SECRET = process.env.JWT_SECRET ?? '';

// expiresIn is in seconds
// export const createJWT = async <T>(data: T, expiresIn: number) => {
//     // return new Promise((resolve, reject) => {
//     //     jwt.sign(data as any, String(process.env.JWT_SECRET), { expiresIn }, (err, result) => {
//     //         if (err) {
//     //             reject(err);
//     //         } else {
//     //             resolve(result);
//     //         }
//     //     });
//     // });

//     return jwt.sign(data as any, String(process.env.JWT_SECRET), { expiresIn });
// };

const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a) + a);
const randOf = <T,>(s: T[]) => s.at(rand(0, s.length)) as T;
const fill = <T,>(n: number, p: (i: number) => T) => new Array(n).fill(0).map((_, i) => p(i));
const createCode = () => fill(6, () => randOf('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''))).join('');

const router = express.Router();

// type Game = { id: string };

let codes = new Map<string, string>();

router.post('/', route(async (req) => {
    const { email, code } = req.body;

    if (!email) {
        throw new HttpError(400, 'invalid_email');
    }

    // Первый запрос, у нас нет кода
    if (!code) {
        const codeToSend = createCode();
        
        // А вот это нужно будет сложить в базу
        codes.set(codeToSend, email);

        // Здесь будем отправлять письма
        console.log(`Attempt to login with ${email}, use code ${codeToSend}`);

        return null;
    }

    // Второй запрос, есть и мыло и код
    if (!codes.has(code)) {
        throw new HttpError(400, 'invalid_code');
    }

    const emailToLoginWith = codes.get(code);

    if (!emailToLoginWith) {
        throw new HttpError(500, 'invalid_email_by_code');
    }

    // Создаем JWT с этими данными сроком неделя
    const token = await createJWT({ email }, 60 * 60 * 24 * 7);

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

    const { email } = await readJWT<{ email: string }>(token);

    if (!email) {
        throw new HttpError(403, 'malformed_jwt');
    }

    return { email };
}));

// router.get('/api/games', route(async (req) => {
//     // return get({ key: req.params.key });
//     return global_map.get('games');
// }));

// router.delete('/games/:gameId', route(async (req) => {
//     // return put({ key: req.params.key, value: req.body.value });
// }));

export default router;