import React from 'react';
import { Flex, Heading, Clickable, Paragraph, BaseProps } from 'lib/atoms';

export const Header = ({ ...props }: BaseProps) => {
    return (
        <Flex p="24px 0" justify="flex-start" gap="48px" {...props}>
            <Clickable>
                <Heading weight="800">hex.vtt</Heading>
            </Clickable>

            <Clickable>
                <Paragraph weight="400">Link 1</Paragraph>
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
    );
};