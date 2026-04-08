import React from 'react';

import { CondensedContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { Button } from '@/components/button';

import { Base, Disabled, Flex, Heading, Image, Paragraph } from 'lib/atoms';
import { LineInput } from 'lib/inputs';

// import { useSession, useUser } from './hooks';
import { useToken } from '@/utils/api';
import { useForth } from 'lib/use-forth';

export const NotFoundPage = () => {
    // const [, setToken] = useToken();
    // const { user } = useUser();

    // const logout = React.useCallback(() => {
    //     setToken(null);
    //     window.location.reload();
    // }, []);

    // if (!user) {
    //     return null;
    // }

    return (
        <CondensedContainer pt="12px">
            <Header mb="128px" />

            <Flex dir="column">
                <Image mb="24px" h="92px" src="logo.svg" />
                <Heading mb="10px" size="32px" weight="bold">Страница не найдена</Heading>
                <Paragraph size="18px" color="#777777" mb="24px">Страница, которую вы ищете, не найдена</Paragraph>

                {/* <Button w="100%" onClick={logout}>
                    Выйти
                </Button> */}
            </Flex>           
        </CondensedContainer>
    );
};
