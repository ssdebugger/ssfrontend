import styled from 'styled-components'
import { ScrollbarStyles } from 'theme'

export const DashboardPopup = styled.div<{ showPoup: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: ${(props) => props.theme.transition};
    opacity: ${(props) => (props.showPoup ? 1 : 0)};
    pointer-events: ${(props) => (props.showPoup ? 'all' : 'none')};
`

export const PopupContentWrapper = styled.div<{ showPoup: boolean }>`
    ${ScrollbarStyles}
    position: relative;
    width: 450px;
    min-height: 500px;
    max-height: 700px;
    overflow-y: auto;
    border-radius: 10px;
    background: rgba(255, 255, 255);
    padding: 0.75rem 1rem;

    transition: ${(props) =>
        props.showPoup
            ? 'transform 0.3s ease-out 0.2s, opacity 0.25s ease-out 0.25s'
            : 'transform 0.2s ease-in 0.15s, opacity 0.2s ease-out'};
    opacity: ${(props) => (props.showPoup ? 1 : 0)};
    transform: ${(props) =>
        props.showPoup ? 'translateY(0)' : 'translateY(50px)'};
`

export const PopupBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0.5rem 0;

    h4 {
        padding: 0.5rem;
        font-size: 1.25rem;
    }
`

export const PopupBtn = styled.button`
    padding: 0.5rem;

    svg {
        width: 28px;
        height: 28px;
        stroke-width: 1.5;
    }
`

export const PopupContent = styled.div``
