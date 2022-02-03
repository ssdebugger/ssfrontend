import styled from 'styled-components'
import { ArrowRight } from 'react-feather'

import { HyperLink } from '../cta/link'
import { Heading3 } from '../typography/heading'
import { Paragraph } from '../typography/paragraph'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    flex-basis: calc(80% - 1rem);
    max-width: 320px;
    height: 450px;
    margin: 1rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        max-width: 370px;
        height: 600px;
        margin: 1rem 2rem;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
`
const BrandImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        min-height: 400px;
    }
`

const DeatilsContainer = styled.div`
    margin: 1rem auto;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        margin-right: 0.25rem;
    }

    svg {
        stroke: ${(props) => props.theme.primary};
        transition: ${(props) => props.theme.transition};
    }

    &:hover,
    &:focus {
        a {
            color: ${(props) => props.theme.primary};
        }

        svg {
            transform: translateX(5px);
        }
    }
`

export const BrandCard = (props) => {
    return (
        <CardContainer>
            <ImageContainer>
                <BrandImage src={props.image} alt='image' />
            </ImageContainer>

            <DeatilsContainer>
                <Heading3 textAlign="center" margin="0 0 0.5rem">
                    {props.title}
                </Heading3>

                <Paragraph
                    textAlign="center"
                    maxWidth="80%"
                    margin="0 auto 1.2rem"
                >
                    {props.intro}
                </Paragraph>

                <LinkContainer>
                    <HyperLink varient="tertiary" href="/brand/glove-up">
                        Learn more
                    </HyperLink>

                    <ArrowRight width={20} height={20} />
                </LinkContainer>
            </DeatilsContainer>
        </CardContainer>
    )
}
