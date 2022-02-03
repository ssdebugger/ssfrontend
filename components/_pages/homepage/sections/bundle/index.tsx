import styled from 'styled-components'

import { Heading3, Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

import Link from 'next/link'
import {
    BrandCard,
    BrandImgContainer,
    BrandImg,
    BrandContent,
} from './bundle.style'
import { HyperLink } from '@/components/header'

const BundleContainer = styled.section`
    padding: 3rem 0;
    background: ${(props) => props.theme.vibrantGreen};

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 4rem ${(props) => props.theme.spacingTabletHorizontal};
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 4rem ${(props) => props.theme.spacingDesktop};
    }
`

const HeadingContainer = styled.div`
    max-width: 53rem;
    margin: 0 auto 3rem;
    text-align: center;
    padding: 0 ${(props) => props.theme.spacingMobile};

    h3 {
        margin-bottom: 1.5rem;
        font-size: 2.375rem;
        line-height: 1.25;
        font-weight: 800;
    }

    p {
        line-height: 1.5;
        font-weight: 500;
        max-width: 37.5rem;
        margin: 0 auto;
    }
`

const BundleCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
    }
`

export const Bundle = () => {
    return (
        <BundleContainer>
            <HeadingContainer>
                <Heading3>Perfect Gifting Kits for your loved ones</Heading3>

                <Paragraph>
                    Our Gifting Kit collections are designed to recognise
                    everyday act of kindness and reverberate beyond the first
                    exchange.
                </Paragraph>
            </HeadingContainer>

            <BundleCardContainer>
                <BrandCard>
                    <BrandImgContainer>
                        <BrandImg src="/brands/gloveup.png" />
                    </BrandImgContainer>

                    <BrandContent>
                        <Heading4>Glove up for self protection</Heading4>
                        <Paragraph>
                            Compostable, plant-based biopolymer gloves to
                            protect yourself on the go.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Gloveup</HyperLink>
                    </BrandContent>
                </BrandCard>

                <BrandCard>
                    <BrandImgContainer>
                        <BrandImg src="/brands/plantry.png" />
                    </BrandImgContainer>

                    <BrandContent>
                        <Heading4>Be eco-friendly with Plantry</Heading4>
                        <Paragraph>
                            Classy and environment friendly products for your
                            house and loved ones.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Plantry</HyperLink>
                    </BrandContent>
                </BrandCard>

                {/* <BundleCard>
                    <BundleImgContainer>
                        <BundleCardImg src="/brands/sasya.png" />
                    </BundleImgContainer>

                    <BundleContent>
                        <Heading4>Party pack rectangle</Heading4>

                        <Paragraph>
                            The perfect party bundle, weather you’re buying for
                            a newbie or Sellsager
                        </Paragraph>

                        <Link href="/" passHref>
                            <HyperLink>Shop party bundle</HyperLink>
                        </Link>
                    </BundleContent>
                </BundleCard>

                <BundleCard>
                    <BundleImgContainer>
                        <BundleCardImg src="/brands/sasya.png" />
                    </BundleImgContainer>

                    <BundleContent>
                        <Heading4>Party pack rectangle</Heading4>

                        <Paragraph>
                            The perfect party bundle, weather you’re buying for
                            a newbie or Sellsager
                        </Paragraph>

                        <Link href="/" passHref>
                            <HyperLink>Shop party bundle</HyperLink>
                        </Link>
                    </BundleContent>
                </BundleCard>

                <BundleCard>
                    <BundleImgContainer>
                        <BundleCardImg src="/brands/sasya.png" />
                    </BundleImgContainer>

                    <BundleContent>
                        <Heading4>Party pack rectangle</Heading4>

                        <Paragraph>
                            The perfect party bundle, weather you’re buying for
                            a newbie or Sellsager
                        </Paragraph>

                        <Link href="/" passHref>
                            <HyperLink>Shop party bundle</HyperLink>
                        </Link>
                    </BundleContent>
                </BundleCard> */}
            </BundleCardContainer>
        </BundleContainer>
    )
}
