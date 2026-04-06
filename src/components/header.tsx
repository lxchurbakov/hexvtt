import React from 'react';
import { Flex, Heading, Clickable, Paragraph, BaseProps, Card, Image } from 'lib/atoms';

export const Header = ({ ...props }: BaseProps) => {
    return (
        <Card background="#e9e9e9" mt="12px" radius="36px" p="10px 0" pr="24px" {...props}>
            <Flex justify="flex-start" p="0 18px" gap="36px" >
                <Clickable>
                    <Image w="36px" h="36px" src="logo.svg" />
                </Clickable>

                <Clickable>
                    <Heading weight="600">Главная</Heading>
                </Clickable>

                <Clickable>
                    <Heading weight="600">Игры</Heading>
                </Clickable>

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