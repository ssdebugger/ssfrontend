import styled from 'styled-components'

export const InputForm = styled.input<{
    margin?: string
}>`
    width: 100%;
    height: 58px;
    padding: 0.5rem 0.85rem 0;
    font-size: 1.125rem;
    border: 1px solid #a3a3a3;
    border-radius: 6px;
    transition: 0.15s ease;
    margin: ${(props) => props.margin || '0 0'};
    &:focus {
        border-color: rgb(64, 64, 64);
        box-shadow: 0 0 0px 3px rgba(64, 64, 64, 0.3);
    }
`

export const Boxbutton = styled.button<{
    color?: string
    background?: string
}>`
    width: 80%;
    height: 40px;
    display: block;
    margin: 1rem 1rem;
    background: ${(props) => props.background || '#fff'};
    color: ${(props) => props.color || '#000'};
    border: 1px solid black;
`

export const AddressBox = styled.div`
    margin: 1rem;
    border-radius: 1rem;
    padding: 1rem 0.5rem;
    height: 260px;
    width: 220px;
    cursor: pointer;
    border: 1px solid #333;
    max-width: 300px;
`

export const ShippingButtonHolder = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        display: block;
    }
`

export const ShippingHolder = styled.div`
    margin-bottom: 3rem;
    flex: 1;
`
export const AddButtonholder = styled.div`
    width: 25%;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 5rem;
    @media screen and (max-width: 600px) {
        width: 80%;
        margin-right: 0;
    }
`

export const Boxdefault = styled.button<{
    color?: string
    background?: string
    width?: string
}>`
    width: ${(props) => props.width || '80%'};
    height: 40px;
    display: block;
    margin: 1rem 1rem;
    background: ${(props) => props.background || '#fff'};
    color: ${(props) => props.color || '#000'};
    border: 1px solid black;
    &.tablinksactive {
        background: #14342c;
        color: #fff;
    }
    ${AddressBox}&.tablinksactive {
        border: 2px solid #000;
    } ;
`
export const AddButton = styled.button`
    height: 40px;
    display: block;
    margin: 1rem 1rem;
    border: 1px solid black;
`

export const UserBillingContainer = styled.div`
    height: 0px;
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease-in;
    pointer-events: none;
`
