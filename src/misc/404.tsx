import React from 'react';

import { Flex, Heading, Image, Paragraph } from 'lib/atoms';

import { Header } from '@/components/header';
import { CondensedContainer } from '@/components/containers';

export const NotFoundPage = () => {
    return (
        <CondensedContainer pt="12px">
            <Header mb="128px" />

            <Flex dir="column">
                <Image mb="24px" h="92px" src="logo.svg" />
                <Heading mb="10px" size="32px" weight="bold">Страница не найдена</Heading>
                <Paragraph size="18px" color="#777777" mb="24px">Страница, которую вы ищете, не найдена</Paragraph>
            </Flex>           
        </CondensedContainer>
    );
};
