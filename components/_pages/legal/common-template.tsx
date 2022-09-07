import Head from 'next/head'

import Footer from '@/components/footer'

import { MainHeading } from '@/components/typography/heading'

import { LandingLayout } from 'components/layout/landing'
import { Paragraph } from '@/components/typography/paragraph'

import {
    MainContainer,
    MainContent,
    PageHeading,
    Content,
} from './common-template-styles'

interface Props {
    pageHeading: string
    pageUpdatedOn: string
    children: React.ReactNode
}

export const CommonLegalTemplate: React.FC<Props> = ({
    pageHeading,
    pageUpdatedOn,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{pageHeading} - Sellsage</title>
                
            </Head>

            <LandingLayout>
                <MainContainer>
                    <PageHeading>
                        <MainHeading margin="0 0 0.5rem">
                            {pageHeading}
                        </MainHeading>
                        <Paragraph>{pageUpdatedOn}</Paragraph>
                    </PageHeading>

                    <MainContent>
                        <Content>{children}</Content>
                    </MainContent>
                </MainContainer>
            </LandingLayout>
            <Footer />
        </>
    )
}
