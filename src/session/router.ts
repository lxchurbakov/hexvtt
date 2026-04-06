import express from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

import { route } from 'lib/express-utils';
import { sendNoPasswordAuthCode } from './mail';
// import { global_map } from 'lib/json-storage';

// import { get, put } from './api';

// const JWT_SECRET = process.env.JWT_SECRET ?? '';

// expiresIn is in seconds
export const createJWT = async <T>(data: T, expiresIn: number) => {
    // return new Promise((resolve, reject) => {
    //     jwt.sign(data as any, String(process.env.JWT_SECRET), { expiresIn }, (err, result) => {
    //         if (err) {
    //             reject(err);
    //         } else {
    //             resolve(result);
    //         }
    //     });
    // });

    return jwt.sign(data as any, String(process.env.JWT_SECRET), { expiresIn });
};

const router = express.Router();

// type Game = { id: string };

router.post('/', route(async (req) => {
    const { email } = req.body;

    // make code
    // send email
    
    // const code = jwt.sign(
    //     { email },           // payload
    //     Buffer.from(JWT_SECRET),
    //     { expiresIn: process.env.MAGIC_EXPIRY ?? '15m' }  // options (third parameter)
    // );
    const code = await createJWT({ email }, 60 * 60);

    console.log({ code })

    await sendNoPasswordAuthCode({ email, code });

    return null;
    // const id = uuid();
    // global_map.set('games', (await global_map.get('games') ?? []).concat([{ ...req.body.value, id } as Game]));
    // // return put({ key: req.params.key, value: req.body.value });
    // return id;
}));

// router.get('/api/games', route(async (req) => {
//     // return get({ key: req.params.key });
//     return global_map.get('games');
// }));

// router.delete('/games/:gameId', route(async (req) => {
//     // return put({ key: req.params.key, value: req.body.value });
// }));

export default router;