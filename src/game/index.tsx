// import React from 'react';
// import { Grid } from "./grid";

import { Canvas } from './core/canvas';
import { Entrypoint } from "./core/entrypoint";

// export class Game {
//     public render = (slot: string) => {
//         if (slot === 'main') {
//             return (
//                 <Grid />
//             );
//         }
//     };

// }

// Import Plugins

// Create Game Module
const entrypoint = new Entrypoint();
const background = new Canvas(entrypoint);

export const GamePage = () => {
    return entrypoint.render();
};
