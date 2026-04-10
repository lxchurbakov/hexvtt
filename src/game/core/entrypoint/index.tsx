import { ScreenContainer } from '@/components/containers';
import { EventEmitter } from '@/game/lib/emitter';
import { Absolute, Card, Flex, Paragraph } from 'lib/atoms';
import React from 'react';

export class Entrypoint {
    public onBackgroundRender = new EventEmitter();

    public render = () => {
        const sidebarWidth = '300px'; // header width actually

        return (
            <ScreenContainer style={{ position: 'relative' }}>
                <Flex h="100%" w="100%">
                    {this.onBackgroundRender.emitps(null)}
                </Flex>
            
                {/* Шапка */}
                <Absolute top="12px" left="12px">
                    <Card background="#111111" radius="24px" h="48px" w={`calc(100vw - ${sidebarWidth} - 36px)`} style={{ boxShadow: '0 0 4px 0 rgba(0,0,0,.12)' }} />
                </Absolute>

                {/* Сайдбар */}
                <Absolute top="12px" right="12px">
                    <Card background="#111111" radius="24px" h="calc(100vh - 24px)" w={sidebarWidth} style={{ boxShadow: '0 0 4px 0 rgba(0,0,0,.12)' }} />
                </Absolute>

                {/* Панель инструментов */}
                <Absolute top="calc(12px + 48px + 12px)" left="12px">
                    <Card background="#111111" radius="24px" h="calc(100vh - 84px)" w="48px" style={{ boxShadow: '0 0 4px 0 rgba(0,0,0,.12)' }} />
                </Absolute>
            </ScreenContainer>
        )
    };

};
