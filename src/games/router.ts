import { getUser } from '@/session/utils.server';
import express from 'express';
// import { v4 as uuid } from 'uuid';
import { HttpError, route } from 'lib/express-utils';
import { db } from 'lib/knex';
// import { global_map } from 'lib/json-storage';

// import { get, put } from './api';

const router = express.Router();

// 

router.post('/', route(async (req) => {
    const owner = await getUser(req);

    if (!owner) {
        throw new HttpError(403, 'unauthorized');
    }

    const owner_id = owner.id;
    const { name } = req.body;

    const [game] = await db('games').insert({ name, owner_id }).returning('*');

    return game;
    // console.log({ game });
    // const id = uuid();
    // global_map.set('games', (await global_map.get('games') ?? []).concat([{ ...req.body.value, id } as Game]));
    // return put({ key: req.params.key, value: req.body.value });
    // return id;
}));

router.get('/', route(async (req) => {
    const owner = await getUser(req);

    if (!owner) {
        throw new HttpError(403, 'unauthorized');
    }

    const owner_id = owner.id;

    return await db('games').select('*').where({ owner_id });
}));

router.delete('/:gameId', route(async (req) => {
    const owner = await getUser(req);

    if (!owner) {
        throw new HttpError(403, 'unauthorized');
    }

    const owner_id = owner.id;
    const id = req.params.gameId;

    return await db('games').delete().where({ id, owner_id });
}));

// router.get('/api/games', route(async (req) => {
//     // return get({ key: req.params.key });
//     return global_map.get('games');
// }));

// router.delete('/games/:gameId', route(async (req) => {
//     // return put({ key: req.params.key, value: req.body.value });
// }));

export default router;