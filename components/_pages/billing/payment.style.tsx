import styled from 'styled-components'

export const ShippingAndPrice = styled.div`
    margin: 4rem 0 2rem 0;

    h3 {
        font-size: 1.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: 35%;
    }
`

export const ShippingAddressContainer = styled.div`
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;

    h3 {
        margin-top: 1rem;
    }
`
export const ShippingAddressDetails = styled.div`
    h4 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
    }
`

export const PriceDetails = styled.div``
export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0.75rem 0;

    &:last-child {
        span {
            font-weight: 600;
        }
    }
`

export const Form = styled.form`
    button {
        margin: 3rem 0 0;
        max-width: 400px;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: 55%;
    }
`

export const PaymentPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-direction: row;
    }
`
