import styled from 'styled-components'

import { CardStyles } from '../common-card-styles'

export const CardContainer = styled(CardStyles)``

export const CardTitle = styled.h3`
    font-size: ${(props) => props.theme.large};
    text-align: center;
    text-transform: uppercase;
`

export const BundlePrice = styled.span`
    display: block;
    text-align: center;
    margin: 0.875rem 0;
    font-weight: 500;
    font-size: ${(props) => props.theme.textBase};
`

export const SaveAmount = styled.span`
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    margin-left: 0.5rem;
`

export const BundleDesc = styled.p`
    width: 65%;
    margin: auto;
    word-wrap: break-word;
    text-align: center;
    color: ${(props) => props.theme.textLight};
    font-size: 15px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.875rem 0 0;

    button {
        font-size: 14px;
        box-shadow: none;
    }
`
