import express from 'express';

import { db } from 'lib/knex';
import { HttpError, route } from 'lib/express-utils';

import { getUser } from '@/session/utils.server';

const router = express.Router();

router.post('/', route(async (req) => {
    const owner = await getUser(req);

    if (!owner) {
        throw new HttpError(403, 'unauthorized');
    }

    const owner_id = owner.id;
    const { name } = req.body;

    const [game] = await db('games').insert({ name, owner_id }).returning('*');

    return game;
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