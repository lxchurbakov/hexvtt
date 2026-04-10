import React from 'react';
import { Entrypoint } from '../entrypoint';
import { Image, Paragraph } from 'lib/atoms';

export class Canvas {
    constructor (private entrypoint: Entrypoint) {
        this.entrypoint.onBackgroundRender.on(() => {
            return (
                <Image w="100%" h="100%" src="/map.png" style={{ objectFit: 'cover' }} />
            );
        });
    }
}
