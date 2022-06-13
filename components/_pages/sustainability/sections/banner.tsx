import styled from 'styled-components'
import {  MainHeading } from '@/components/typography/heading'
import { ImpactContainerStyles } from '../impact.style'

const BannerContainer = styled.div`
    ${ImpactContainerStyles}
`

const TextContainer = styled.div`
    h1 {
        font-size: ${(props) => props.theme.heading2};
        font-weight: 700;
        line-height: 150%;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        h1 {
            text-align: center;
            font-size: ${(props) => props.theme.heading1};
        }
    }
`

const BrandLogo = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 0 1.5rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 auto 1.5rem;
        width: 80px;
        height: 80px;
    }
`

export const Banner = () => {
    return (
        <BannerContainer>
            <BrandLogo src="favicon.svg" alt='brand logo'/>
            <TextContainer>
                <MainHeading>
                    Flourishing a green Earth the right way,
                    <br />
                    the eco-friendly way.
                </MainHeading>
            </TextContainer>
        </BannerContainer>
    )
}
