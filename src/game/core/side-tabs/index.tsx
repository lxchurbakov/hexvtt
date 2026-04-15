import React from 'react';

import { Clickable, Flex } from 'lib/atoms';

import { Entrypoint } from '../entrypoint';

export class SideTabs {
    constructor (private entrypoint: Entrypoint) {
        this.entrypoint.onSidebarRender.on(() => {
            return (
                <Flex gap="4px" p="12px" justify="flex-start">
                    <Clickable w="32px" h="32px" radius="8px" background="white" />
                    <Clickable w="32px" h="32px" radius="8px" background="white" />
                </Flex>
            );
        });
    }
}