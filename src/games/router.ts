import express from 'express';
import { v4 as uuid } from 'uuid';
import { route } from 'lib/express-utils';
import { global_map } from 'lib/json-storage';

// import { get, put } from './api';

const router = express.Router();

type Game = { id: string };

router.post('/api/games', route(async (req) => {
    const id = uuid();
    global_map.set('games', (await global_map.get('games') ?? []).concat([{ ...req.body.value, id } as Game]));
    // return put({ key: req.params.key, value: req.body.value });
    return id;
}));

router.get('/api/games', route(async (req) => {
    // return get({ key: req.params.key });
    return global_map.get('games');
}));

router.delete('/games/:gameId', route(async (req) => {
    // return put({ key: req.params.key, value: req.body.value });
}));

export default router;