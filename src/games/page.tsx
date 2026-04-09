import { CondensedContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { BaseProps, Card, Clickable, Flex, Heading, Paragraph } from 'lib/atoms';
import React from 'react';
import { DownloadIcon } from './icons/download';
import { EnterIcon } from './icons/enter';
import { TrashIcon } from './icons/trash';
import { useApi } from '@/utils/api';
import { useNavigate } from 'react-router-dom';
import { useAsyncMemo, useTicker } from '@/utils/hooks';
import { Game } from './types';
import { useForth } from 'lib/use-forth';

const GameCard = ({ game, onDelete, onEnter, ...props }: BaseProps & { game: Game, onDelete: () => void, onEnter: () => void }) => {
    return (
        <Card background='#EFEFEF' p="20px" radius="24px" {...props}>
            <Heading size="22px" weight="bold" color="#111111">{game.name}</Heading>
            <Paragraph mb="18px" size="18px" color="#777777">Изменено 10 минут назад</Paragraph>

            <Flex justify="flex-start" mb="32px">
                <Card mr="-12px" w="32px" h="32px" radius="32px" background="white" border="2px solid #111111">
                    <Flex w="100%" h="100%">
                        <Heading size="18px" weight="bold">A</Heading>
                    </Flex>
                </Card>

                <Card mr="-12px" w="32px" h="32px" radius="32px" background="white" border="2px solid #111111">
                    <Flex w="100%" h="100%">
                        <Heading size="18px" weight="bold">A</Heading>
                    </Flex>
                </Card>

                <Card w="32px" h="32px" radius="32px" background="white" border="2px solid #111111">
                    <Flex w="100%" h="100%">
                        <Heading size="18px" weight="bold">A</Heading>
                    </Flex>
                </Card>
            </Flex>

            <Flex justify="space-between">
                <Flex gap="6px" justify="flex-start">
                    <Clickable background="#111111" radius="12px" w="40px" h="40px">
                        <Flex w="100%" h="100%">
                            <DownloadIcon />
                        </Flex>
                    </Clickable>

                    <Clickable background="#111111" radius="12px" w="40px" h="40px" onClick={onEnter}>
                        <Flex w="100%" h="100%">
                            <EnterIcon />
                        </Flex>
                    </Clickable>
                </Flex>

                <Clickable background="#ed3939" radius="12px" w="40px" h="40px" onClick={onDelete}>
                    <Flex w="100%" h="100%">
                        <TrashIcon />
                    </Flex>
                </Clickable>
            </Flex>
        </Card>
    );
};

export const GamesPage = () => {
    const api = useApi();
    const navigate = useNavigate();

    // const _games = useForth(() => api.get('/games'));
    const ticker = useTicker();
    const [games, loading] = useAsyncMemo<Game[]>(() => api.get('/games'), [api, ticker], []);

    const create = React.useCallback(async () => {
        // Создать игру с рандомным именем
        // Открыть страницу игры
        const num = Math.floor(Math.random() * 1000);
        const name = `My Cool Game #${num}`;

        const game = await api.post('/games', { name });

        navigate(`/games/${game.id}`);
    }, [api]);

    const remove = React.useCallback(async (gameId: number) => {
        await api.delete(`/games/${gameId}`);
        ticker();
    }, [api, ticker]);

    // console.log({ games });

    return (
        <CondensedContainer pt="24px">
            <Header mb="128px" />

            <Heading mb="12px" size="32px" weight="bold">Ваши игры</Heading>
            <Paragraph mb="48px" size="18px" weight="400">Lorem ipsum dolor sit amet</Paragraph>

            <Flex justify="flex-start" isWrap gap="24px">
                {games.map((game) => (
                    <GameCard game={game} onDelete={() => remove(game.id)} onEnter={() => navigate(`/games/${game.id}`)} />
                ))}

                <Clickable onClick={create} background='#EFEFEF' p="20px" radius="24px" w="260px" h="220px">
                    <Flex h="100%">
                        <Paragraph weight="bold">Создать игру</Paragraph>
                    </Flex>
                </Clickable>
            </Flex>
        </CondensedContainer>
    );
};
