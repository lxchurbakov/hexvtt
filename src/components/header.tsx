import React from 'react';
import { Flex, Heading, Clickable, Paragraph, BaseProps, Card, Image } from 'lib/atoms';

export const Header = ({ ...props }: BaseProps) => {
    return (
        <Card background="#333333" radius="36px" p="12px 36px" w="100%" {...props}>
            <Flex justify="space-between">
                <Clickable>
                    <Flex gap="20px">
                        <Image src="logo-white-out.svg" w="49px" />

                        <Heading color="white" weight="bold" size="22px">papervtt.space</Heading>
                    </Flex>
                </Clickable>
                
                <Flex gap="20px">
                    <Clickable>
                        <Heading color="white" weight="600" size="18px">Главная</Heading>
                    </Clickable>

                    <Clickable>
                        <Heading color="white" weight="400" size="18px">Игры</Heading>
                    </Clickable>

                    <Clickable>
                        <Heading color="white" weight="400" size="18px">О нас</Heading>
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