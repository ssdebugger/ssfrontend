import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Paragraph } from '@/components/typography/paragraph'
import { MainHeading, Heading3 } from '@/components/typography/heading'

import {
    ContentContainer,
    IllustraionContainer,
    OfferBannerContainer,
    BrandContainer,
    HighlightText,
    Thumbnail,
    Illustration,
} from './style'

export const OfferBanner = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <OfferBannerContainer>
            <IllustraionContainer>
                <Illustration
                    src="https://sellsagemichigan-19484.kxcdn.com/wp-content/uploads//2020/03/motherUpdated.svg"
                    alt="sellsage"
                />
            </IllustraionContainer>

            <ContentContainer>
                <BrandContainer>
                    <Thumbnail src="./favicon.svg" alt="sellsage" />
                    <MainHeading
                        fontSize={themeContext.large}
                        margin="0 0 0 1rem"
                        fontWeight={400}
                    >
                        Sellsage
                    </MainHeading>
                </BrandContainer>

                <Heading3 margin="0 0 0.5rem">New here? don't miss our welcome discount!</Heading3>
                <Paragraph maxWidth="500px" color="#dedede">
                    Welcome, USE CODE:
                    <HighlightText> HELLOSAGE</HighlightText> during checkout to
                    get a 40% off on your first order.
                </Paragraph>
            </ContentContainer>
        </OfferBannerContainer>
    )
}
