import styled from 'styled-components'

export const Main = styled.main`
    margin: 5rem 0 0;
    display: flex;
    flex-direction: column-reverse;
    padding: 0 1rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 0.6fr 0.4fr;
        gap: 1.5rem;
        max-width: 1200px;
        margin: calc(60px + 1rem) auto 5rem;
        padding: 0 1.5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 0.7fr 0.3fr;
    }
`

export const Col1 = styled.div`
    margin: 1rem 0 2rem;

    @media (min-width: 768px) {
        margin: 0;
    }
`

export const ShippingDropdown = styled.div`
    margin: 0 0 1.5rem 0;
`

export const ShippingDetailsContainer = styled.div<{ styleRegular?: boolean }>`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    padding: 2rem 1rem;

    @media (min-width: 768px) {
        paddign: 2rem;

        grid-template-columns: ${(props) =>
            props.styleRegular ? '1fr' : 'repeat(4, 1fr)'};

        .col-start-1 {
            grid-column-start: 1;
        }

        .col-start-3 {
            grid-column-start: 3;
        }

        .col-start-4 {
            grid-column-start: 4;
        }

        .col-end-3 {
            grid-column-end: 3;
        }

        .col-end-4 {
            grid-column-end: 4;
        }

        .col-end-5 {
            grid-column-end: 5;
        }
    }
`

export const Col2 = styled.div<{ show: boolean }>`
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(229, 229, 229, 0.8);
    box-shadow: 0 4px 5px rgba(229, 229, 229, 0.6);
    border-radius: 8px;
    height: max-content;
    overflow: hidden;

    max-height: ${(props) => (props.show ? '500px' : 0)};
    transition: ${(props) =>
        props.show
            ? '0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
            : 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.2s ease, max-height 0.4s ease'};
    opacity: ${(props) => (props.show ? 1 : 0)};

    > h3 {
        font-size: 1.125rem;
        width: 100%;
        padding: 1rem 0 0.75rem;
        margin: 0 0 0.25rem;
        border-bottom: 3px solid rgb(23, 23, 23);
    }

    @media (min-width: 728px) {
        position: sticky;
        top: 2rem;
        right: 0;

        max-height: max-content;
        opacity: 1;
    }
`
export const OrderDetails = styled.div``

export const PricingDetails = styled.div`
    padding: 0.5rem 0;
    border-bottom: 1px solid #d4d4d4;
`
export const Expanded = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 0.25rem;
    margin: 0 0 0.25rem;

    h4 {
        font-size: 0.875rem;
        font-weight: 500;
    }
`

export const Total = styled.div`
    padding: 1rem 0;

    span,
    h4 {
        font-weight: 600;
        font-size: 1.125rem;
    }
`

export const Col3 = styled.button<{ show: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    margin: 0.5rem 0 1rem;
    border-radius: 8px;
    border: 1px solid rgba(229, 229, 229, 0.8);
    box-shadow: 0 4px 5px rgba(229, 229, 229, 0.6);
    background: ${(props) => (props.show ? '#f5f5f5' : '#fff')};

    span {
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h4 {
        font-weight: 400;
    }

    svg {
        width: 20px;
        height: 20px;
        transition: inherit;
        transform: ${(props) => (props.show ? 'rotate(180deg)' : 'rotate(0)')};
        margin: 0 0 0 0.5rem;
    }

    @media (min-width: 768px) {
        display: none;
    }
`
