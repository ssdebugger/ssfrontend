import styled from 'styled-components'
import Image from 'next/image'

import { HyperLink } from '@/components/cta/link'
import { SubHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { ImpactContainerStyles } from '../impact.style'

const Container = styled.div`
    ${ImpactContainerStyles}

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const Grid = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        justify-content: space-between;
    }
`

const Content = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        flex-direction: column;
        flex-basis: 45%;
    }
`

const BlockQuote = styled.div`
    margin: 3rem 0;
    color: #007257;

    span {
        display: block;
        text-align: center;

        &:first-child {
            font-size: ${(props) => props.theme.headingXl};
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: auto 0 5rem;

        span:first-child {
            font-size: 4rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        span:first-child {
            font-size: 5rem;
            font-weight: 800;
        }
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 600px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 45%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Collabrations = () => {
    return (
        <Container>
            <SubHeading>Our Collaborations</SubHeading>
            <Grid>
                <Content>
                    <Paragraph>
                        We collaborated with Ocean beach clean-up and supplied
                        them with our compostable gloves for their beach
                        cleaning campaign. Volunteering at a clean-up campaign
                        and looking to avoid plastic?
                    </Paragraph>

                    <Paragraph>
                        <HyperLink varient="tertiary" href="/contact-us">
                            Shoot us an email
                        </HyperLink>{' '}
                        and we would be happy to collaborate with and provide
                        gloves at a discount!
                    </Paragraph>

                    <BlockQuote>
                        <span>2000</span>
                        <span>total gloves donated</span>
                    </BlockQuote>
                </Content>

                <ImageContainer>
                    <img
                        src="/beach-cleanup-img.JPG"
                        alt="Ocean beach clean up."
                    />
                </ImageContainer>
            </Grid>
        </Container>
    )
}
