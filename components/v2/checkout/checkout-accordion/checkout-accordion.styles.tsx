import styled from 'styled-components'

export const Header = styled.button<{ show: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    background: ${(props) => (props.show ? '#f5f5f5' : '#fff')};
    border: 1px solid rgba(229, 229, 229, 1);
    box-shadow: 0 4px 5px rgba(229, 229, 229, 0.6);
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    svg {
        width: 20px;
        height: 20px;
        transition: inherit;
        transform: ${(props) => (props.show ? 'rotate(180deg)' : 'rotate(0)')};
    }
`
export const HeaderContents = styled.div`
    display: flex;
    align-items: center;

    h2 {
        font-size: 1.125rem;
        margin: 0 0 0 1.125rem;
    }
`

export const StepIndicator = styled.span<{ show: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;
    border-radius: 50px;
    padding: 0 0 0.15rem;
    font-weight: 500;

    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    color: ${(props) => (props.show ? '#fff' : '#101010')};
    background: ${(props) => (props.show ? '#101010' : '#fff')};
    border: ${(props) =>
        `1px solid ${props.show ? '#101010' : props.theme.blueGray400}`};
`

export const AccordinContents = styled.div<{ show: boolean }>`
    transition: ${(props) =>
        props.show
            ? '0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
            : 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.2s ease, max-height 0.4s ease'};
    opacity: ${(props) => (props.show ? 1 : 0)};

    transform-origin: top center;
    transform: ${(props) => (props.show ? 'scaleY(1)' : 'scaleY(0)')};
    opacity: ${(props) => (props.show ? 1 : 0)};
    height: max-content;
    max-height: ${(props) => (props.show ? '1200px' : 0)};

    label {
        margin-bottom: 0.5rem;
    }

    input {
        border-radius: 8px;
    }

    button {
        margin: 0 1rem 2rem;
    }
`
