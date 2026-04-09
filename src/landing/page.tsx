
import React from 'react';
import { Helmet } from 'react-helmet';
import { Base, Card, Clickable, Container, Flex, Heading, Paragraph, Text } from 'lib/atoms';
import styled from 'styled-components';
// import { Routes, Route } from "react-router-dom";
// import Readme from './readme';
// import S3Page from './examples/s3/page';
// import PostgresPage from './examples/postgres/page';
// import RedisPage from './examples/redis/page';

import * as theme from 'lib/theme';
import { Header } from '@/components/header';
import { CondensedContainer } from '@/components/containers';
import { useNavigate } from 'react-router-dom';
// import { Footer } from './components/footer';
// import { TgChannel } from './components/tg-channel';

const GradientText = styled.span`
    background: -webkit-linear-gradient(0deg, #4092f4, #00ffdc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <CondensedContainer pt="24px">
            <Header mb="256px" />

            <Base mb="256px">
                <Heading line="1.2" mb="24px" weight="bold" size="52px">
                    Первая VTT <br />
                    <GradientText>с hex-first дизайном</GradientText>
                    {/* <GradientText>сделанная в России</GradientText> */}
                </Heading>

                <Paragraph mb="48px" weight="400" size="22px" mw="600px">
                    Мы создаем первый в РФ VTT с упором на шестиугольный дизайн. 
                </Paragraph>

                <Clickable p="18px 36px" radius="36px" background="#16dbe4" style={{ position: 'relative' }} border={`2px solid ${theme.colors.white}`}>
                    <img src="dragon.png" style={{ position: 'absolute', height: '250%', right: -20, bottom: -30, clipPath: 'inset(0 0 30px 0)' }} />
                    
                    <Paragraph style={{ position: 'relative', zIndex: 2 }} size="22px" weight="bold" color={theme.colors.white}>
                        КНОПКА ДРАКОН РРР
                    </Paragraph>
                </Clickable>
            </Base>

            <Base mb="256px">
                <Heading size="32px" weight="bold" mb="12px">Мы переосмысляем VTT</Heading>
                <Paragraph mb="36px">Мы создаем новую VTT с нуля. </Paragraph>

                <Flex w="100%" gap="12px">
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                </Flex>
            </Base>

            <Base mb="256px">
                <Heading size="32px" weight="bold" mb="12px">Не только РПГ</Heading>
                <Paragraph mb="36px">Новые механики, которые позволят вам играть не только в DND</Paragraph>

                <Flex w="100%" gap="12px">
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 2)) / 3)" h="250px" background="#efefef" radius="12px" />
                </Flex>
            </Base>

            <Base mb="256px">
                <Heading size="32px" weight="bold" mb="12px">Hexagon is the bestagon</Heading>
                <Paragraph mb="36px">Мы сконцентрировались на HEX гриде и поддерживаем только его</Paragraph>

                <Flex w="100%" gap="12px" isWrap justify="flex-start">
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                </Flex>
            </Base>

            <Base mb="256px">
                <Heading size="32px" weight="bold" mb="12px">🇷🇺 <GradientText>СВО</GradientText>я VTT 🇷🇺</Heading>
                <Paragraph mb="36px">СДЕЛАНО В РОССИИ ГОЙДА. ФАУНДРИ В С Ё</Paragraph>

                <Flex w="100%" gap="12px" isWrap justify="flex-start">
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                    <Card w="calc((100% - (12px * 1)) / 2)" h="250px" background="#efefef" radius="12px" />
                </Flex>
            </Base>

            <Card mb="24px" w="100%" h="250px" background="#efefef" radius="12px">
                <Flex h="100%">
                    <Paragraph>Это футер</Paragraph>
                </Flex>
            </Card>

            {/* <Flex gap="12px" align="flex-start" mb="256px" isWrap justify="flex-start">
                <Card w="calc((100% - 12px) / 2)" border={`2px solid ${theme.colors.text}`} radius="24px" p="30px">
                    <Text size="32px" weight="800" mb="24px">
                        Chess.js
                    </Text>

                    <Text size="18px" mw="700px" mb="32px">
                        Короткий курс о создании шахматного приложения. Возьмём JS, HTML, CSS и немного React{'\''}а. На выходе получим полноценное приложение-игру “Шахматы”.
                    </Text>

                    <Clickable p="12px 36px" radius="36px" background={theme.colors.text}>
                        <Paragraph size="18px" weight="bold" color="white">Начать</Paragraph>
                    </Clickable>
                </Card>

                <Card w="calc((100% - 12px) / 2)" border={`2px solid ${theme.colors.text}`} radius="24px" p="30px">
                    <Text size="32px" weight="800" mb="24px">
                        Flappy Bird
                    </Text>

                    <Text size="18px" mw="700px" mb="32px">
                        Повторяем самую популярную игру в мире с помощью HTML, Canvas и JS.
                    </Text>

                    <Clickable p="12px 36px" radius="36px" background={theme.colors.text}>
                        <Paragraph size="18px" weight="bold" color="white">Начать</Paragraph>
                    </Clickable>
                </Card>

                <Card w="calc((100% - 12px) / 2)" border={`2px solid ${theme.colors.text}`} radius="24px" p="30px">
                    <Text size="32px" weight="800" mb="24px">
                        Spline Generator
                    </Text>

                    <Text size="18px" mw="700px" mb="32px">
                        Рисуем сплайны (градиентные линии по заданному пути) и экспортируем их в png. 
                    </Text>

                    <Clickable p="12px 36px" radius="36px" background={theme.colors.text}>
                        <Paragraph size="18px" weight="bold" color="white">Начать</Paragraph>
                    </Clickable>
                </Card>
            </Flex> */}

            {/* <Base mb="256px">
                <Heading line="1.2" mb="24px" weight="bold" size="32px">Присоединяйся к сообществу</Heading>
                <Paragraph mb="36px" weight="400" size="18px" mw="600px">
                    Отвечаем на вопросы и обсуждаем ваши пет проекты в канале. Присоединяйтесь!
                </Paragraph>                

                <Clickable p="18px 36px" radius="36px" background={theme.colors.text}>
                    <Paragraph size="18px" weight="bold" color="white">Присоединиться</Paragraph>
                </Clickable>
            </Base> */}

            {/* <Footer /> */}
        </CondensedContainer>
    );
};

{/* <Text line="1.2" size="52px" weight="800" mb="0px">
                        Петпроджектная
                    </Text>
                    
                    <Text weight="600" mb="32px" color="#777777">
                        pet-project-naya точка ru
                    </Text>

                    <Text size="22px" mb="24px" mw="700px">
                        В петпроджектной мы учим программирование на практике. Создаём пет-проджекты, участвуем в соревнованиях и решаем интересные задачи.
                    </Text>

                    <Text size="22px" mw="700px" mb="32px">
                        Пока что у нас только один публичный пет-проджект и чат в телеграме. Присоединяйтесь, скоро будет интересно!
                    </Text>

                    <Clickable p="12px 24px" background="#9A49CC" radius="4px">
                        <Text size="18px" weight="800">Перейти в телеграм</Text>
                    </Clickable> */}