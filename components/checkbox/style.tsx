import styled from 'styled-components'
const CheckBoxSpan = styled.span`
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
`

export const CheckBoxContainer = styled.div`
    margin-bottom: 0.5rem;
`

export const CheckBox = styled.label`
    user-select: none;
    cursor: pointer;
    border-radius: 6px;
    overflow: hidden;
    transition: ${(props) => props.theme.transition};
    display: flex;

    padding: 0.5rem 0;

    &:not(:last-child) {
        margin-right: 6px;
    }
`
export const IconContainer = styled(CheckBoxSpan)`
    position: relative;
    flex: 0 0 18px;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid #cccfdb;
    transition: ${(props) => props.theme.transition};
`
export const CheckBoxSymbol = styled.svg`
    width: 12px;
    height: 12px;
    position: absolute;
    pointer-events: none;
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: ${(props) => props.theme.transition};
    transform: translate3d(0, 0, 0);
`
export const TextContainer = styled(CheckBoxSpan)`
    padding-left: 8px;
    line-height: 18px;
`

export const CheckBoxInput = styled.input`
    position: absolute;
    visibility: hidden;

    @keyframes zoom-in-out {
        50% {
            transform: scale(0.9);
        }
    }

    &:checked + ${CheckBox} ${IconContainer} {
        background: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
        animation: zoom-in-out 0.3s ease;
    }

    &:checked + ${CheckBox} ${IconContainer} ${CheckBoxSymbol} {
        stroke-dashoffset: 0;
    }
`
