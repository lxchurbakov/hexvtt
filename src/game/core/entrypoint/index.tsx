import { ScreenContainer } from '@/components/containers';
import { EventEmitter } from '@/game/lib/emitter';
import { Absolute, Card, Flex, Image, Paragraph } from 'lib/atoms';
import React from 'react';

export class Entrypoint {
    public onBackgroundRender = new EventEmitter();
    public onSidebarRender = new EventEmitter();

    public render = () => {
        const sidebarWidth = '300px'; // header width actually

        return (
            <ScreenContainer style={{ position: 'relative' }}>
                <Flex h="100%" w="100%">
                    {this.onBackgroundRender.emitps(null)}
                </Flex>
            
                {/* Шапка */}
                <Absolute top="0" left="0">
                    <Card
                        background="#ffffff55"
                        h="48px"
                        w={`calc(100vw - ${sidebarWidth})`}
                        style={{ boxShadow: '0 0 4px 0 rgba(255,255,255,.5)', borderRight: '1px solid #777777' }}
                    >
                        <Flex h="100%" justify="flex-start" p="0 12px">
                            <Image src="/logo-white-out.svg" h="32px" />
                        </Flex>
                    </Card>
                </Absolute>

                {/* Сайдбар */}
                <Absolute top="0" right="0">
                    <Card background="#ffffff55" h="calc(100vh)" w={sidebarWidth} style={{ boxShadow: '0 0 4px 0 rgba(255,255,255,.5)' }}>
                        {this.onSidebarRender.emitps(null)}
                    </Card>
                </Absolute>

                {/* Панель инструментов */}
                <Absolute top="48px" left="0">
                    <Card
                        background="#ffffff55"
                        h="calc(100vh - 48px)"
                        w="48px"
                        style={{ boxShadow: '0 0 4px 0 rgba(255,255,255,.5)', borderTop: '1px solid #777777' }}
                    >
                        <Flex h="100%">
                            <Paragraph size="14px" color="#111" mw="80%" style={{ overflowWrap: 'break-word' }}>Это инструменты</Paragraph>
                        </Flex>
                    </Card>
                </Absolute>
            </ScreenContainer>
        )
    };

};
