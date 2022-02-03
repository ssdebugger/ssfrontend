import styled from 'styled-components'
import { ScrollbarStyles } from 'theme'

export const SlideInContainer = styled.div<{ showBag: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    transition: 0.2s ease;
    overflow: hidden;
    opacity: ${(props) => (props.showBag ? 1 : 0)};
    pointer-events: ${(props) => (props.showBag ? 'auto' : 'none')};
`

export const SlideInBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`

export const SlideInContent = styled.div<{ showBag: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 1);
    height: 100%;
    width: 100%;
    padding: 1.25rem;
    overflow-y: auto;
    transition: 0.2s ease;
    transform: ${(props) =>
        props.showBag ? 'translateX(0)' : 'translateX(50%)'};

    transform-origin: center right;

    transition: ${(props) =>
        props.showBag
            ? 'opacity 0.2s ease-out, transform 0.35s ease-out'
            : 'opacity 0.35s ease-in, transform 0.2s ease-in'};

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: max-content;
        display: flex;
        overflow: hidden;
        padding: 2.5rem 0 0 2.5rem;
    }
`

// Close Button
export const CloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    z-index: 51;

    width: 44px;
    height: 44px;
    background: ${(props) => props.theme.green700};

    border-radius: 50%;
    /* box-shadow: 0 4px 5px 2px rgb(0 0 0/0.25); */

    svg {
        stroke: #fff;
    }
`

// Coupons Seciton
export const CouponsContainer = styled.div`
    ${ScrollbarStyles}
    overflow-y: auto;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 2rem 0 0;
        margin: 0 3rem 0 0;
    }
`

export const CouponAlertContainer = styled.div`
    width: 100%;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        max-width: 230px;
    }
`

export const CouponForm = styled.form`
    margin: 1rem 0;
    padding: 1rem 0;

    button {
        height: 40px;
    }
`

export const CouponInput = styled.input`
    width: 100%;
    padding: 0.875rem 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    color: #000;
    font-weight: 500;
    border: 2px solid ${(props) => props.theme.blueGray400};

    &:focus {
        border: 2px solid ${(props) => props.theme.blueGray900};
    }
`

export const CouponsList = styled.div`
    display: flex;

    padding: 0 0 1.5rem;
    margin: 0 0 1.5rem;
    overflow-x: auto;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        overflow-x: hidden;
        overflow-y: auto;

        padding: 0;
        margin: 0;
        flex-direction: column;
    }
`

export const CouponItem = styled.div`
    margin: 0 1.5rem 0 0;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 0 1.5rem;
    }
`

// Products List
export const ProductsContainer = styled.div`
    ${ScrollbarStyles}
    overflow-y: auto;

    max-width: 450px;
    margin: 2rem 0;

    position: relative;

    > h4 {
        margin-bottom: 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        margin: 0;
        padding: 0 2.5rem 2.5rem 0;
    }
`

export const ProductsList = styled.div`
    margin-bottom: 1.5rem;
`

export const PriceSection = styled.div`
    button {
        transition: 0.2s ease;

        &:hover {
            background: ${(props) => props.theme.green700};
        }

        &:nth-child(3) {
            margin-top: 0.875rem;
            background: transparent;
            color: ${(props) => props.theme.blueGray600};
            border: 1px solid ${(props) => props.theme.green300};

            &:hover {
                color: ${(props) => props.theme.blueGray900};
                border: 1px solid ${(props) => props.theme.green700};
            }
        }
    }

    & > a {
        padding-bottom: 3rem;
        display: block;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin-top: auto;

        & > a {
            padding-bottom: 0;
        }
    }
`

export const BagPrice = styled.div`
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.875rem;

    span {
        font-size: 1.125rem;
    }

    &:last-child {
        span {
            font-weight: 600;
        }
    }
`

//Empty Cart
export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    position: relative;
    max-width: 400px;

    h4 {
        margin: 1.5rem 0 1.25rem;
        text-align: center;
        font-size: 1.5rem;

        &:first-child {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            font-size: 1.75rem;
        }
    }

    p {
        text-align: center;
        line-height: 1.4;
        max-width: 250px;
        margin: 0 auto;
        color: ${(props) => props.theme.blueGray900};
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-right: 2.5rem;
    }
`
