import styled from 'styled-components'

export const AddressContainer = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: grid;
        padding: 1.5rem 0;
        grid-template-columns: 1fr 1fr;
    }
`

export const AddAddressBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1rem;
    width: 200px;
    height: 260px;

    border-radius: 1rem;
    color: #4e4e4e;
    cursor: pointer;
    border: 1px solid #6b6b6b;

    svg {
        width: 2.5rem;
        height: 2.5rem;
        stroke-width: 1.5;
    }

    span {
        margin-top: 0.75rem;
        font-size: 1.125rem;
    }
`

export const ShippingAddressContainer = styled.div``
export const ShippingAddressList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const BillingAddressContainer = styled.div``
