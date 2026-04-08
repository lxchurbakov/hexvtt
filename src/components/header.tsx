import React from 'react';
import { Flex, Heading, Clickable, Paragraph, BaseProps, Card, Image } from 'lib/atoms';
import { useNavigate } from 'react-router-dom';

export const Header = ({ ...props }: BaseProps) => {
    const navigate = useNavigate();

    return (
        <Card background="#333333" radius="36px" p="16px 24px" w="100%" {...props}>
            <Flex justify="space-between">
                <Clickable>
                    <Flex gap="8px">
                        <Image src="logo-white-out.svg" w="36px" />

                        <Heading color="white" weight="bold" size="18px">papervtt.space</Heading>
                    </Flex>
                </Clickable>
                
                <Flex gap="20px">
                    <Clickable>
                        <Heading color="white" weight="600" size="16px">Главная</Heading>
                    </Clickable>

                    <Clickable onClick={() => navigate('/games')}>
                        <Heading color="white" weight="400" size="16px">Игры</Heading>
                    </Clickable>

                    <Clickable>
                        <Heading color="white" weight="400" size="16px">О нас</Heading>
                    </Clickable>
                </Flex>

                {/* <

                <Clickable>
                    <Paragraph weight="400">Канал</Paragraph>
                </Clickable> */}

                {/* <Clickable>
                    <Paragraph weight="400">docs</Paragraph>
                </Clickable> */}

                {/* <Clickable>
                    <Text weight="400">examples</Text>
                </Clickable>

                <Clickable>
                    <Text weight="400">author</Text>
                </Clickable> */}
            </Flex>
        </Card>
    );
};