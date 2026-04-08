import { FullWidthContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { Heading } from 'lib/atoms';
import React from 'react';
import { useParams } from 'react-router-dom';

export const GamePage = () => {
    const { gameId } = useParams();

    return (
        <FullWidthContainer>
            <Heading>{gameId}</Heading>

            {/* Canvas */}
        </FullWidthContainer>
    )
};
