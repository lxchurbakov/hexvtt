import React from 'react';

import { LineInput } from 'lib/inputs';
import { Base, Disabled, Flex, Heading, Image, Paragraph } from 'lib/atoms';

import { useToken } from '@/utils/api';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { CondensedContainer } from '@/components/containers';

import { useSession, useUser } from './hooks';

const Authorize = () => {
    const session = useSession();
    const [token, setToken] = useToken();

    // Тут будет либо email либо code
    const [mode, setMode] = React.useState('email');
    const [email, setEmail] = React.useState('');
    const [code, setCode] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const proceed = React.useCallback(async () => {
        if (mode === 'email') {
            setLoading(true)
            session.kickoff(email).then(() => {
                setMode('code');
            }).catch((err) => {
                // TODO error handling
            }).then(() => {
                setLoading(false);
            });
        }

        if (mode === 'code') {
            setLoading(true)
            session.login(email, code).then((token) => {
                setToken(token);
                window.location.reload();
            }).catch((err) => {
                // TODO error handling
            }).then(() => {
                setLoading(false);
            });
        }
    }, [email, code, setLoading, setMode, session, setToken]);

    const disabled = React.useMemo(() => {
        if (loading) {
            return false;
        }

        if (mode === 'email') {
            return !email;
        }

        if (mode === 'code') {
            return !email && !code;
        }
    }, [mode, email]);

    return (
        <Flex dir="column">
            <Image mb="24px" h="92px" src="logo.svg" />
            <Heading mb="10px" size="32px" weight="bold">Авторизация</Heading>
            <Paragraph size="18px" color="#777777" mb="24px">Чтобы продолжить, введите ваш e-mail</Paragraph>

            <Base w="100%" mw="450px">
                <Disabled disabled={mode === 'code'}>
                    <LineInput mb="36px" background="#EFEFEF" p="12px 18px" size="18px" radius="24px" value={email} onChange={setEmail} placeholder="Ваша почта" />
                </Disabled>

                {mode === 'code' && (
                    <Base>
                        <Paragraph mb="12px">Мы отправили вам письмо с кодом, введите его в поле ниже</Paragraph>
                        <LineInput mb="36px" background="#EFEFEF" p="12px 18px" size="18px" radius="24px" value={code} onChange={setCode} placeholder="Код из письма" />
                    </Base>
                )}

                <Button w="100%" disabled={disabled} onClick={proceed}>
                    Продолжить
                </Button>
            </Base>
        </Flex>
    );
};

const UserInfo = () => {
    const [, setToken] = useToken();
    const { user } = useUser();

    const logout = React.useCallback(() => {
        setToken(null);
        window.location.reload();
    }, []);

    if (!user) {
        return null;
    }
   
    return (
        <Flex dir="column">
            <Image mb="24px" h="92px" src="logo.svg" />
            <Heading mb="10px" size="32px" weight="bold">Вы авторизованы</Heading>
            <Paragraph size="18px" color="#777777" mb="24px">Ваше мыло {user.email}</Paragraph>

            <Button w="100%" onClick={logout}>
                Выйти
            </Button>
        </Flex>
    );
};

export const SessionPage = () => {
    const { user, loading } = useUser();

    return (
        <CondensedContainer pt="24px">
            <Header mb="128px" />

            {loading ? (
                <div>Loading</div>
            ): (
                <>
                    {user ? (
                        <UserInfo />
                    ) : (
                        <Authorize />
                    )}
                </>
            )}                
        </CondensedContainer>
    );
};