import { ContentContainer, FullWidthContainer, PageContainer } from '@/components/containers';
import { Header } from '@/components/header';
import { Base, Clickable, Heading, Image, Paragraph } from 'lib/atoms';
import { LineInput } from 'lib/inputs';
import React from 'react';
import { useSessionApi } from './hooks';
// import { useParams } from 'react-router-dom';

export const AuthPage = () => {
    // const { gameId } = useParams();

    // console.log({ gameId });
    const authApi = useSessionApi();

    const [email, setEmail] = React.useState('');
    // const [email, setEmail] = React.useState('');
    
    const proceed = React.useCallback(async () => {
        // console.log('auth', email)
        const wtf = await authApi.kickoff(email);

        console.log({ wtf })
    }, [email]);

    return (
        <PageContainer>
            {/* <Header mb="128px" /> */}
            {/* <Heading>{gameId}</Heading> */}

            <ContentContainer p="128px 0">
                <Image mb="12px" h="82px" src="logo.svg" />
                <Heading mb="12px" size="32px" weight="bold">Paper VTT</Heading>
                <Paragraph mb="36px">Авторизуйтесь, чтобы продолжить:</Paragraph>

                <Base mw="450px">
                    <LineInput mb="36px" background="#efeef1" p="12px 18px" size="18px" radius="24px" value={email} onChange={setEmail} placeholder="Ваша почта" />

                    <Clickable background="#efeef1" p="12px 18px" radius="24px" onClick={proceed}>
                        <Heading weight="bold">Продолжить</Heading>
                    </Clickable>
                </Base>
            </ContentContainer>
        </PageContainer>
    )
};
