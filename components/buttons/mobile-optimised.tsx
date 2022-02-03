import styled from 'styled-components'

export const Button = styled.button`
    padding: 0.5rem;
    transition: 0.2s ease;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        color: #059e59;
        background: #e8f8f1;
    }

    &:focus {
        color: #059e59;
        background: #c7f1df;
    }
`

export const Link = styled.a`
    transition: 0.2s ease;
    background: transparent;
    border-radius: 50px;

    &:hover {
        color: #059e59;
        background: #e8f8f1;
    }
`
