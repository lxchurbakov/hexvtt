import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';

import * as theme from 'lib/theme';

import { SessionPage } from './session/page';
import { NotFoundPage } from './misc/404';
import { GamesPage } from './games/page';
import { GamePage } from './game/page';
import { LandingPage } from './landing/page';

export default () => {
    return (
        <>
           <Helmet>
                {theme.helmet}
                <style>{`body { margin: 0; background: #ffffff; padding: 0; font-family: ${theme.font.family}; }`}</style>
            </Helmet>

            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/session' element={<SessionPage />} />

                <Route path='/games' element={<GamesPage />} />
                <Route path='/games/:gameId' element={<GamePage />} />
                
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    );
};
