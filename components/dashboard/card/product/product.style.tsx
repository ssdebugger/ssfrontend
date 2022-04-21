import styled, { css } from 'styled-components'

const InputDefaultStyles = css`
    border: 1px solid transparent;
    border-radius: 6px;
    &:hover,
    &:focus {
        border-color: #a3a3a3;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const ProductDetails = styled.div`
    padding-left: 1.125rem;
    max-width: 300px;

    h4 {
        font-weight: 500;
        font-size: ${(props) => props.theme.textBase};
    }
`

export const ProductCardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        ${InputDefaultStyles}

        flex-basis: 65%;
        width: 250px;
        font-size: 1.25rem;
        padding: 0.75rem;
        transition: ${(props) => props.theme.transition};
        text-overflow: clip;
        max-height: 90px;
    }
`
export const ProductCardImg = styled.div`
    width: 30%;

    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`

export const ProductCardDetails = styled.div`
    margin: 0.875rem 0;

    h4 {
        margin: 0;
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
    }

    textarea {
        ${InputDefaultStyles}
        width: 100%;
        max-width: 100%;
        padding: 0.5rem;
    }

    .input_container {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;

        &::before {
            content: '$';
            display: block;
            margin-right: 0.25rem;
        }
    }

    input {
        border: 1px solid #a3a3a3;
        border-radius: 6px;
        padding: 0.5rem;
        width: 100px;
    }
`

export const ProductCardButton = styled.button`
    margin: 1rem 0 0;
    background: #047857;
    color: #fff;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    border-radius: 6px;
    font-weight: 500;
    transition: ${(props) => props.theme.transition};

    &:hover {
        background: #064e3b;
    }

    &:disabled {
        opacity: 0.5;
    }
`
