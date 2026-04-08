import express from 'express';

import { catchErrors } from 'lib/express-utils';

import sessionRouter from './session/router';
import gamesRouter from './games/router';

const router = express.Router();

router.use('/api/session', sessionRouter);
router.use('/api/games', gamesRouter);

router.use(catchErrors);

export default router;
