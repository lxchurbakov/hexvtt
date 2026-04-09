import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, Heading, Clickable, BaseProps, Card, Image } from 'lib/atoms';

export const Header = ({ ...props }: BaseProps) => {
    const navigate = useNavigate();

    return (
        <Card background="#333333" radius="36px" p="16px 24px" w="100%" {...props}>
            <Flex justify="space-between">
                <Clickable onClick={() => navigate('/')}>
                    <Flex gap="8px">
                        <Image src="logo-white-out.svg" w="36px" />

                        <Heading color="white" weight="bold" size="18px">papervtt.space</Heading>
                    </Flex>
                </Clickable>
                
                <Flex gap="20px">
                    <Clickable onClick={() => navigate('/games')}>
                        <Heading color="white" weight="600" size="16px">Играть</Heading>
                    </Clickable>

                    <Clickable>
                        <Heading color="white" weight="400" size="16px">Не играть</Heading>
                    </Clickable>
                </Flex>
            </Flex>
        </Card>
    );
};