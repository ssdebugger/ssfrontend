import styled from 'styled-components'

export const Span = styled.span<{ margin?: string }>`
    font-size: inherit;
    margin: ${(props) => props.margin && props.margin};
`

export const OrderCardContainer = styled.div`
    padding: 1.5rem 1rem;
    margin: 0 0 2.5rem;
    border: 1px solid rgba(163, 163, 163, 0.8);
    border-radius: 8px;
    background: #fff;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 auto 4rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 3rem 3rem 2rem;
    }
`

export const OrderCardStatusbar = styled.div`
    text-align: center;
    padding: 0.75rem 0 1.75rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #fff;
    &.processing {
        background: #f59e0b;
    }

    &.canceled {
        background: #dc2626;
    }
`

export const OrderCardMain = styled.div``

export const OrderCardTop = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        align-items: flex-start;
        flex-direction: row;
    }
`

export const OrderDetailsContainer = styled.div`
    margin: 0 0 1.5rem 0;
    flex: 1;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        margin: 0 0 2rem 0;
    }
`

export const OrderDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #727272;
    font-weight: 400;
    font-size: ${(props) => props.theme.textBase};

    h3 {
        margin-bottom: 0;
        font: inherit;
    }

    &.orderId {
        color: #000;
        font-weight: 500;
        font-size: ${(props) => props.theme.heading4};
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-direction: column;
        align-items: flex-start;
        flex-basis: 25%;

        h3 {
            font-size: ${(props) => props.theme.base};
            margin-bottom: 0.5rem;
            color: #727272;
            font-weight: 400;
        }

        span {
            font-size: ${(props) => props.theme.large};
            color: #000;
            font-weight: 500;
        }
    }
`

export const OrderStatusBarContainer = styled.div`
    display: flex;
    justify-content: center;

    margin: 0 0 3rem 0;
    padding-bottom: 1rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0;
        padding: 0;
    }
`
export const OrderStatusContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const OrderStatus = styled.div<{ isStatusPending?: boolean }>`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${(props) =>
        props.isStatusPending ? '#a3a3a3' : props.theme.primary};

    svg {
        width: 1rem;
        height: 1rem;
        stroke: #fff;
        stroke-width: 3px;
    }
`

export const OrderStatusLine = styled.div<{ isStatusPending?: boolean }>`
    width: 80px;
    height: 3px;
    background: ${(props) =>
        props.isStatusPending ? '#a3a3a3' : props.theme.primary};
`

export const OrderStatusLabel = styled.span`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    font-size: ${(props) => props.theme.small};
    color: #404040;
`

export const OrderStatusText = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(164, 164, 164, 0.6);
    padding: 0 0 1rem 0;
    margin: 0 0 3rem 0;

    &.delivered {
        color: ${(props) => props.theme.primaryTint1};
    }

    &.processing {
        color: #f59e0b;
    }

    &.canceled {
        color: #dc2626;
    }
`

export const OrderItemsContainer = styled.div`
    margin: 0 0 1rem 0;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 3rem 0;
    }
`

export const OrderItem = styled.div`
    display: flex;
    padding: 0 0 2rem;
    margin: 0 0 1.5rem;

    img {
        width: 98px;
        height: 98px;
        object-fit: cover;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-right: 1rem;
        flex-basis: calc(50% - 1rem);
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: calc(33.33% - 1.5rem);
    }
`
export const OrderItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1rem;

    h4 {
        margin: 0 0 0.5rem 0;
        font-size: ${(props) => props.theme.textMd};
        font-weight: 500;
    }

    span {
        margin: 0 0 1.25rem 0;
        color: #737373;
    }

    button {
        padding: 0.5rem 1.5rem;
        border-radius: 10px;
        box-shadow: none !important;
        width: max-content;
    }
`

export const BottomButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    button,
    a {
        width: 100%;
        flex-basis: 45%;
        border-radius: 10px;
        box-shadow: none !important;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        max-width: 700px;
        margin: 0 auto;
    }
`
