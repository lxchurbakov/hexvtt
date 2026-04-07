import React from 'react';
import { BaseProps, Clickable, Disabled, Heading } from "lib/atoms";

export const Button = ({ disabled, children, onClick, ...props }: React.PropsWithChildren<{ onClick?: () => void, disabled?: boolean } & BaseProps>) => {
    return (
        <Disabled disabled={disabled}>
            <Clickable background="#111111" p="12px 18px" radius="24px" onClick={onClick} {...props}>
                <Heading align="center" w="100%" color="white" weight="bold">{children}</Heading>
            </Clickable>
        </Disabled>
    );
};
