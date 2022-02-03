import styled from 'styled-components'

import { CardStyles, breatheInOut } from '../common-card-styles'

export const CardLink = styled.a`
    display: block;
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

export const CardTitle = styled.h3`
    font-size: ${(props) => props.theme.textBase};
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

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1.15rem 0 0;
`

export const Mrp = styled.span`
    /* text-decoration: line-through; */
    color: ${(props) => props.theme.textLight};
    font-size: 12px;
    display: inline-block;
    margin: 0.5rem;
    text-transform: uppercase;
`

export const CardPrice = styled.h4``

export const PriceSymbol = styled.span`
    line-height: 0.9;
    font-size: 0.833rem;
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

export const CardContainer = styled(CardStyles)`
    padding: 2.75rem 0 1rem;
    &:hover,
    &:focus {
        ${WishlistButton} {
            opacity: 1;
        }
    }
`
