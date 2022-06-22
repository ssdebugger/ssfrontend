import styled from 'styled-components'

import { HomepageContainerStyles } from '../../style'

export const DisposableBrandsContainer = styled.section`
    ${HomepageContainerStyles}
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        grid-template-columns: 1fr 1fr;
    }
`

export const DisposableBrandCard = styled.div`
    a {
        display: block;
        font-weight: 500;
        text-decoration: underline;
    }
`

export const DisposableText = styled.div`
    padding: 0 3rem 1.5rem;

    h3 {
        font-size: 2.375rem;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        opacity: 0;
        transform: translate3d(0, 40px, 0);
        transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;

        &.show {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 0.7s ease-out 0.2s, transform 0.5s ease-out 0.2s;
        }
    }

    p {
        color: #292524;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.45;
        opacity: 0;
        transform: translate3d(0, 40px, 0);
        transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;

        &.show {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 0.7s ease-out 0.25s,
                transform 0.5s ease-out 0.25s;
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 2.5rem 0;

        h4 {
            font-size: 2.75rem;
            line-height: 1.208;
        }

        p {
            font-size: 1.125rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        h3 {
            font-size: 3rem;
            line-height: 1;
        }
    }
`

export const DisposableBrandImgContainer = styled.div``

export const DisposableBrandImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
`

export const DisposableBrandContent = styled.div`
    max-width: 26rem;
    margin: 0 auto;
    text-align: center;
    padding: 1.5rem ${(props) => props.theme.spacingMobile};

    h4 {
        margin-bottom: 0.75rem;
        font-size: 1.75rem;
        font-weight: 800;
        line-height: 1.357;
    }

    p {
        line-height: 1.5;
        font-weight: 500;
        color: #171717;
        max-width: 37.5rem;
        margin: 0 auto 1.5rem;
    }
`

export const DisposableBundleContainer = styled.section`
    padding: 3rem 0;
    background: ${(props) => props.theme.vibrantGreen};

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 4rem ${(props) => props.theme.spacingTabletHorizontal};
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 4rem ${(props) => props.theme.spacingDesktop};
    }
`

export const DisposableHeadingContainer = styled.div`
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

export const DisposableBundleCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }
`
