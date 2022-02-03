import styled from 'styled-components'

export const TextareaWrapper = styled.div`
    position: relative;

    &:focus-within label,
    input:not([value='']) + label {
        font-size: 12px;
        top: 0.45rem;
        transform: translate(0);
        color: #525252;
    }
`

export const TextareaLabel = styled.label`
    position: absolute;
    top: 15%;
    left: 0.85rem;
    font-size: 1.125rem;
    transform: translateY(-15%);
    pointer-events: none;
    transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    color: #737373;
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 118px;
    padding: 1.5rem 0.85rem 0;
    font-size: 1.125rem;
    border: 1px solid #a3a3a3;
    border-radius: 6px;
    transition: 0.15s ease;

    &:focus {
        border-color: rgb(64, 64, 64);
        box-shadow: 0 0 0px 3px rgba(64, 64, 64, 0.3);
    }
`
