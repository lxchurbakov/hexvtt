import React from 'react';

import { Base, BaseProps, Container } from 'lib/atoms';

export const CondensedContainer = ({ children, ...props }: React.PropsWithChildren<BaseProps>) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
};

// export const ContentContainer = ({ children, ...props }: React.PropsWithChildren<BaseProps>) => {
//     return (
//         <Base {...props}>
//             {children}
//         </Base>
//     );
// };

export const FullWidthContainer = ({ children, ...props }: React.PropsWithChildren<BaseProps>) => {
    return (
        <Base w="100vw" style={{ overflow: 'hidden' }} {...props}>
            {children}
        </Base>
    );
};

export const ScreenContainer = ({ children, style, ...props }: React.PropsWithChildren<BaseProps & { style: React.CSSProperties }>) => {
    return (
        <Base w="100vw" h="100vh" style={{ ...style, overflow: 'hidden' }}{...props}>
            {children}
        </Base>
    );
};
