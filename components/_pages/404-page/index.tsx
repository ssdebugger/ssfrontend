import Head from 'next/head'
import styled from 'styled-components'

import Footer from '@/components/footer'
import { LandingLayout } from '@/components/layout/landing'
import { MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { HyperLink } from '@/components/header'
import { ArrowLeft } from 'react-feather'

const Content = styled.div`
    margin: 6rem 0;
    text-align: center;

    h2 {
        font-size: 4.5rem;
        letter-spacing: -1.3rem;
        font-weight: 800;
        transform: translateX(-2%);
        margin-bottom: 1rem;
    }

    p {
        max-width: 320px;
        margin: 0 auto 2.5rem;
        padding: 0 1rem;
        color: ${(props) => props.theme.blueGray600};
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme.linkColor};
        font-weigth: 500;

        svg {
            margin-right: 0.5rem;
            transition: ${(props) => props.theme.transition};
        }

        &:hover {
            text-decoration: underline;

            svg {
                transform: translateX(-5px);
            }
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 10rem 0;

        h2 {
            font-size: 7rem;
            letter-spacing: -1.8rem;
            margin-bottom: 1.5rem;
        }

        p {
            max-width: 384px;
            font-size: 1.25rem;
        }
    }
`

const ErrorPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found - Sellsage</title>
                {/* <meta name='robots' content='noindex'></meta> */}
            </Head>

            <LandingLayout>
                <Content>
                    <MainHeading>4😔4</MainHeading>

                    <Paragraph>
                        We&#39;re sorry, it looks like the page you&#39;re looking for
                        can&#39;t be found...
                    </Paragraph>

                    <HyperLink href="/">
                        <ArrowLeft /> Back to Homepage.
                    </HyperLink>
                </Content>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default ErrorPage
