import styled from 'styled-components'
import { Gift, Home } from 'react-feather'
import Link from 'next/link'

import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { HyperLink } from '@/components/cta/link'

const OfferCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    background: ${(props) => props.theme.vibrantGreen};

    @media (${(props) => props.theme.scrrenMd}) {
        max-width: 350px;
    }
`
const IconContainer = styled.div`
    margin-bottom: 0.875rem;

    svg {
        width: 70px;
        height: 70px;
        stroke-width: 1.3px;
    }
`

const OfferContent = styled.div`
    h4 {
        font-size: 1.75rem;
        line-height: 38px;
        font-weight: 800;

        @media (${(props) => props.theme.scrrenMd}) {
            font-size: 2.25rem;
            line-height: 45px;
        }
    }

    p {
        font-weight: 500;
        margin-bottom: 2.25rem;
        color: ${(props) => props.theme.blueGray900};
    }
`

const CardLink = styled.a`
    width: 100%;
    border: 1px solid ${(props) => props.theme.blueGray900};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    box-shadow: 0 0 0 1px transparent;
    transition: ${(props) => props.theme.transition};

    &:hover,
    &:focus {
        box-shadow: 0 0 0 1px #000;
    }
`

export const OfferCard = ({ card }) => {
    return (
        <OfferCardContainer>
            {card == 'card1' ? (
                <IconContainer>
                    <Gift />
                </IconContainer>
            ) : (
                <IconContainer>
                    <Home />
                </IconContainer>
            )}

            {card == 'card1' ? (
                <OfferContent>
                    <Heading4>
                    This MOTHER&#39;S DAY, why not treat your mother to something special while also remembering Mother Earth?
                    </Heading4>

                    <Paragraph>
                      Here&#39;s some of our top picks that puts the planet first
                    </Paragraph>
                </OfferContent>
            ) : (
                <OfferContent>
                    <Heading4>
                        Make your life Easier and Greener every day
                    </Heading4>

                    <Paragraph>
                        Shop from our range of Dining Essentials and
                        biodegradable options for disposable tableware - all
                        curated for a waste-free kitchen
                    </Paragraph>
                </OfferContent>
            )}

            <Link href="/shop" passHref>
                <CardLink>Find your match</CardLink>
            </Link>
        </OfferCardContainer>
    )
}
