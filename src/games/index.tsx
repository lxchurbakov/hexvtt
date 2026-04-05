import { ContentContainer, PageContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { Card, Clickable, Flex, Heading, Paragraph } from 'lib/atoms';
import React from 'react';
import * as theme from 'lib/theme';

export const useAsyncMemo = <T,>(predicate: () => Promise<T>, deps: React.DependencyList, def: T) => {
    const [value, setValue] = React.useState(def as T);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null as Error | null);

    React.useEffect(() => {
        setLoading(true);
        predicate()
            .then(setValue)
            .catch(setError)
            .then(() => setLoading(false));
    }, deps);

    return [value, loading, error] as const;
};

const useApi = () => {
    const host = 'http://localhost:8000/api';

    return {
        get: (url: string) => 
            fetch(host + url, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                .then((r) => r.json()),
        post: (url: string, body: unknown) => 
            fetch(host + url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                .then((r) => r.json()),
        // get: (url: string) => fetch(host, { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
    };
};

const useGames = () => {
    const api = useApi();
    // const [list, loading, error] = useAsyncMemo(() => api.get('/games'), [], []);
    
    const list = React.useCallback(async() => {
        return await api.get('/games');


    }, []);

    const create = React.useCallback(async() => {
        return await api.post('/games', {});

        // console.log({ id });
    }, []);

    return { list, create };
};

export const GamesPage = () => {
    const games = useGames();
    const [list] = useAsyncMemo(() => games.list(), [], []);

    console.log({ list });

    const create = React.useCallback(async() => {
        const id = await games.create();
        console.log({ id })
    }, []);

    return (
        <PageContainer>
            <Header />

            <ContentContainer>
                <Heading>Your games</Heading>

                <Flex isWrap justify="flex-start">
                    {list.map((game: any) => (
                        <Card w="calc(100% / 2)" p="24px" radius="24px" border="2px solid #cccccc">
                            {game.id}
                        </Card>
                    ))}
                </Flex>

                <Clickable onClick={create} p="18px 36px" radius="36px" background="#16dbe4" border={`2px solid ${theme.colors.white}`}>
                    <Paragraph size="22px" weight="bold" color={theme.colors.white}>Создать</Paragraph>
                </Clickable>
            </ContentContainer>
        </PageContainer>
    );
};
