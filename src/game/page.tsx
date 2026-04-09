import { ScreenContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { Absolute, Card, Flex, Heading, Paragraph } from 'lib/atoms';
import React from 'react';
import { useParams } from 'react-router-dom';

export const GamePage = () => {
    const { gameId } = useParams();
    const sidebarWidth = '80vw'; // header width actually

    return (
        <ScreenContainer style={{ position: 'relative' }}>
            <Flex h="100%" w="100%">
                <Paragraph>Тут будет канвас</Paragraph>
            </Flex>
        
            {/* Шапка */}
            <Absolute top="12px" left="12px">
                <Card background="#efefef" radius="24px" h="48px" w={sidebarWidth} />
            </Absolute>

            {/* Сайдбар */}
            <Absolute top="12px" right="12px">
                <Card background="#efefef" radius="24px" h="calc(100vh - 24px)" w={`calc((100vw - ${sidebarWidth}) - 36px)`} />
            </Absolute>

            {/* Панель инструментов */}
            <Absolute top="calc(12px + 48px + 12px)" left="12px">
                <Card background="#efefef" radius="24px" h="calc(100vh - 84px)" w="48px" />
            </Absolute>
        </ScreenContainer>
    )
};
