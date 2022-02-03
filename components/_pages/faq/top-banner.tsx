import { MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { HyperLink } from '@/components/cta/link'
import styled from 'styled-components'

const TopBannerContainer = styled.div`
    padding: 2rem 0;

    h1 {
        font-family: ${(props) => props.theme.serif};
        font-weight: 500;
    }

    p {
        color: ${(props) => props.theme.blueGray600};

        a {
            text-decoration: underline;
            &:hover {
                color: ${(props) => props.theme.green400};
            }
        }

        span,
        a {
            font: inherit;
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 3rem 0;
        p {
            font-size: ${(props) => props.theme.textMd};
        }
    }
`

export const TopBanner = () => {
    return (
        <TopBannerContainer>
            <MainHeading margin="0 0 1rem">FAQs</MainHeading>
            <Paragraph maxWidth="500px">
                Everything you need to know about the product and billing. Can’t
                find the answer you’re looking for?
                <span>
                    {' '}
                    Please feel free to{' '}
                    <HyperLink href="/contact-us" varient="tertiary">
                        contact us.
                    </HyperLink>
                </span>
            </Paragraph>
        </TopBannerContainer>
    )
}
