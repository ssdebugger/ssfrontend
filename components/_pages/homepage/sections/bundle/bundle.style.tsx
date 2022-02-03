import styled from 'styled-components'

import { HomepageContainerStyles } from '../../style'

export const BrandsContainer = styled.section`
    ${HomepageContainerStyles}
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        grid-template-columns: 1fr 1fr;
    }
`

export const BrandCard = styled.div`
    a {
        display: block;
        font-weight: 500;
        text-decoration: underline;
    }
`

export const BrandImgContainer = styled.div``

export const BrandImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
`

export const BrandContent = styled.div`
    max-width: 26rem;
    margin: 0 auto;
    text-align: center;
    padding: 1.5rem ${(props) => props.theme.spacingMobile};
    h4 {
        margin-bottom: 1rem;
        font-size: 1.75rem;
        line-height: 1.357;
    }
    p {
        line-height: 1.5;
        color: ${(props) => props.theme.blueGray900};
        max-width: 37.5rem;
        margin: 0 auto 1.5rem;
    }
`
