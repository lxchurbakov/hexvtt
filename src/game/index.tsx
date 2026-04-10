import React from 'react';
// import { Grid } from "./grid";

import { Canvas } from './core/canvas';
import { Entrypoint } from "./core/entrypoint";
import { Grid } from './core/grid';
import { Viewport } from './core/viewport';

// export class Game {
//     public render = (slot: string) => {
//         if (slot === 'main') {
//             return (
//                 <Grid />
//             );
//         }
//     };

// }
const ClientOnly = ({ children }: any) => {
    const [wtf, setWtf] = React.useState(false);

    React.useEffect(() => {
        setWtf(true);
    }, []);

    if (!wtf) {
        return null;
    }

    return children;
};

// Import Plugins
const entrypoint = new Entrypoint();

// Create Game Module
if (typeof window !== 'undefined') {
    const viewport = new Viewport();
    const canvas = new Canvas(entrypoint, viewport);
    const grid = new Grid(canvas, viewport);
}

 export const GamePage = () => {
    return (
        <ClientOnly>
            {entrypoint.render()}
        </ClientOnly>
    )
};

