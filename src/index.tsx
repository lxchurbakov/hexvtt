import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';

import * as theme from 'lib/theme';
import { GamesPage } from './games';
import { BoxPage } from './box/page';
import { GamePage } from './game/page';

// import { NotFoundPage } from './misc/not-found';
// import { AuthPage } from './auth/page';

export default () => {
    return (
        <>
           <Helmet>
                {theme.helmet}
                <style>{`body { margin: 0; background: #fffcf3; padding: 0; font-family: ${theme.font.family}; }`}</style>
            </Helmet>

            <Routes>
                {/* <Route path='/' element={<BoxPage />} /> */}
                <Route path='/games/:gameId' element={<GamePage />} />
                
                <Route path='*' element={<GamesPage />} />
            </Routes>
        </>
    );
};
