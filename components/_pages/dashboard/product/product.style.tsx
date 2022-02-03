import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 80px 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    border-bottom: 1px solid #d4d4d5;
`

export const ProductTitle = styled.h4`
    font-size: 1.25rem;
    flex: 1;
`
export const ProductImage = styled.div`
    width: 80px;
    height: 80px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ProdcutSku = styled.span``
export const ProdcutPrice = styled.span``
export const ProdcutAvailability = styled.span<{ in_stock: boolean }>``
export const ProdcutCategory = styled.span`
    span {
        margin: 0 0.5rem;
    }
`

export const ProdcutSource = styled.span``

export const ProdcutEditBtn = styled.button`
    display: flex;
    align-items: center;

    svg {
        margin-right: 0.5rem;
    }
`
