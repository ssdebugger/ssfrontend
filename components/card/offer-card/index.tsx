import styled from 'styled-components'
import { Gift, Home } from 'react-feather'
import Link from 'next/link'

import { MainHeading, SubHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

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
                    <MainHeading fontSize="1.728rem" fontWeight={800}>
                        A Green wedding with disposable dinnerware and
                        disposable cutlery
                    </MainHeading>

                    <Paragraph>
                        Looking out for disposable cutlery <br></br> and
                        disposable dinnerware for weddings,parties without
                        exerting yourself with the clean-up? Our products are
                        sure to please you!
                        <br></br>
                        <br></br>
                    </Paragraph>
                </OfferContent>
            ) : (
                <OfferContent>
                    <SubHeading fontSize="1.728rem" fontWeight={800}>
                        Make your life Easier and Greener every day with
                        disposable dinnerware set
                    </SubHeading>
                    <Paragraph>
                        Check out our compostable tableware and disposable cutlery set selection for the
                        very best elegant and custom pieces from our shops to
                        add the perfect finishing touch to your dining
                        experience
                    </Paragraph>
                </OfferContent>
            )}

            <Link href="/shop" passHref>
                <CardLink>Find your match</CardLink>
            </Link>
        </OfferCardContainer>
    )
}
