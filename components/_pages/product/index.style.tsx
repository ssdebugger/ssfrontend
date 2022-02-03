import styled from 'styled-components'
import { ScrollbarStyles } from 'theme'

/* old code */
export const Discount = styled.span`
    color: red;
    font-size: 1rem;
`
export const ProductSize = styled.h1`
    font-size: 1rem;
    margin: 0.625rem 0 0.25rem;
    font-weight: 500;
`
export const Button = styled.button<{
    margin?: string
    width?: string
    color?: string
}>`
    background: ${(props) => props.color || '#019875'};
    color: white;
    border: 1px solid #888;
    width: ${(props) => props.width || '80%'};
    font-size: 1rem;
    margin: ${(props) => props.margin || '5% 5%'};
    height: 30px;
    @media only screen and (min-width: 600px) {
        display: inline;
        width: 40%;
        height: 30px;
    }
`
export const Typography = styled.p<{
    fontWeight?: string
    fontSize?: string
    color?: string
    marginLeft?: string
    marginTop?: string
}>`
    font-size: ${(props) => props.fontSize || '0.875rem'};
    margin-left: ${(props) => props.marginLeft || '1rem'};
    margin-top: ${(props) => props.marginTop || '1rem'};
    font-weight: ${(props) => props.fontWeight || 400};
    white-space: no-wrap;
    color: ${(props) => props.color || 'black'};
    @media only screen and (min-width: 600px) {
        margin-top: ${(props) => props.marginTop || '0.5rem'};
    }
`
export const ToggleContainer = styled.div`
    max-height: 0;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`

export const ProductCarousel = styled.div`
    overflow: hidden !important;
    height: 420px !important;
    width: 100%;
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
        overflow-x: auto;
        overflow-y: hidden;
        animation: scroller 10s infinite;
        height: 320px !important;
    }
`

export const ProductImageHolder = styled.div`
    width: 100%;
    height: 100%;
    display: inline;
`

export const ProductImage = styled.img`
    width: 100%;
    padding: 5px;
    height: 420px !important;
    @media only screen and (max-width: 600px) {
        height: 320px !important;
        object-fit: fill;
        & :hover {
            border: 0;
        }
    }
`
export const MiniCardHolder = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    width: 100%;
    &::-webkit-scrollbar {
        width: 0 !important;
    }
`

export const MiniCard = styled.div`
    min-height: 200px;
    min-width: 200px;
    box-shadow: 1px 3px #ccc;
    cursor: pointer;
    padding-bottom: 1rem;
    margin: 2rem;
`

export const MiniCardImg = styled.img`
    height: 70%;
    object-fit: fill;
    width: 100%;
`
export const MiniCardHeading = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 10px;
`

export const UserImageHolder = styled.div`
    display: flex;
    width: 80vw;
    overflow: auto;
`
/* old code end */
export const ProductPageTop = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 50%;

        div {
            flex-basis: 95%;
        }
    }
`

export const ProductPageTopHeading = styled.div`
    padding: 0 0 1.125rem 0;

    h1 {
        margin-top: 0.5rem;
        font-size: 20px;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`

export const ImageContainer = styled.div`
    ${ScrollbarStyles}
`

export const HeadingContainer = styled.div`
    margin: 0 0 1.125rem;
    display: none;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 0 1.75rem;
        display: block;

        h1 {
            margin-top: 0.5rem;
            font-size: ${(props) => props.theme.heading3};
        }
    }
`

export const Container = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
    }
`

export const MainContentContainer = styled.div`
    margin: 2rem 0 1.125rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0;
        flex-basis: 50%;
        max-width: 530px;
        padding: 2rem 0 0;
    }
`

export const PricingContainer = styled.div`
    margin: 0 0 1.75rem;

    @media (min-width: 762px) {
        margin: 0 0 2rem;
    }
`
export const CollapseBtnContainer = styled.div`
    border: 1px solid #e5e5e5;
    border-left: 0;
    border-right: 0;
`

export const AboutItemContainer = styled.div`
    margin: 1.5rem 0;
`

export const Desktop = styled.img`
    width: 100%;
    height: auto;
    display: none;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

export const Mobile = styled.img`
    width: 100%;
    height: auto;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`

export const AddToCart = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 2.5rem 0 0;
`

export const Quantity = styled.div`
    h3 {
        font-size: 1rem;
    }
    margin: 0 1.25rem 0 0;
`
export const QuantityInput = styled.input`
    height: 55px;
    padding: 1rem 0 1rem 0.5rem;
    width: 74px;
`

export const SaveToWishlist = styled.div`
    margin: 1rem 0 0;

    button {
        svg {
            margin: 0 0 0 0.5rem;
            stroke-width: 1;
        }
    }
`
