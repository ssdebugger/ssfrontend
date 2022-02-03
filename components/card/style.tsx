import styled, { keyframes } from 'styled-components'

const breatheInOut = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
`

export const CardLink = styled.a`
    display: block;
    cursor: pointer;
`

export const WishlistButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    padding: 0.5rem;
    width: 40px;
    height: 40px;

    svg.default {
        stroke: #929292;
        transition: ${(props) => props.theme.transition};
    }

    svg.filled {
        stroke: ${(props) => props.theme.primary};
        fill: ${(props) => props.theme.primary};
        animation: 0.5s ease ${breatheInOut};
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        opacity: 0;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 1.2rem;
`

export const CardImage = styled.img`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transition: ${(props) => props.theme.transition};
    transition-duration: 0.1s;
`
export const LifeStyleImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: ${(props) => props.theme.transition};
`

export const CardTitle = styled.h3`
    font-size: ${(props) => props.theme.small};
    text-transform: uppercase;

    ~ p {
        line-height: 1.5;
    }
`

export const RatingsContainer = styled.div`
    margin: 0.75rem 0;

    svg.filled {
        fill: ${(props) => props.theme.primaryDark};
    }

    svg.default {
        fill: #d5d5d5;
        stroke: #d5d5d5;
    }
`

export const Mrp = styled.span`
    text-decoration: line-through;
    color: ${(props) => props.theme.textLight};
    font-size: ${(props) => props.theme.small};
    display: inline-block;
    margin: 0.5rem 0;
`

export const CardPrice = styled.h4``

export const PriceSymbol = styled.span`
    line-height: 0.9;
    font-size: 0.6875rem;
    vertical-align: text-top;
    margin-left: 0.0625rem;
`

export const PriceInteger = styled.span`
    line-height: 0.9090909091;
    font-size: ${(props) => props.theme.large};
`

export const PriceDecimals = styled.span`
    line-height: 0.9;
    font-size: 0.6875rem;
    vertical-align: text-top;
    margin-left: 0.0625rem;
`

export const CardContainer = styled.div`
    position: relative;
    padding: 2.75rem 0 1rem;
    margin: 0.625rem;
    flex-basis: calc(100% - (0.625rem * 2));

    @media (min-width: ${(props) => props.theme.screenXs}) {
        flex-basis: calc(50% - (0.625rem * 2));
    }

    @media (min-width: ${(props) => props.theme.screenSm}) {
        flex-basis: calc(33.33% - (0.625rem * 2));
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: calc(24.9% - (0.625rem * 2));
    }

    &:hover,
    &:focus {
        ${LifeStyleImage}, ${WishlistButton} {
            opacity: 1;
        }

        ${CardImage} {
            opacity: 0;
        }
    }
`
