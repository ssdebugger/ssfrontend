import styled from 'styled-components'
import { X } from 'react-feather'

interface Props {
    children: React.ReactNode
    showPopup: boolean
    togglePopupFn: () => void
    showX: boolean
    aspectRatio?: 'tall' | 'regular'
}

const PopupContainer = styled.div<{ showPopup: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${(props) => (props.showPopup ? 1 : 0)};
    pointer-events: ${(props) => (props.showPopup ? 'auto' : 'none')};

    transition: 0.2s ease;
`

const ContentWrapper = styled.div<{
    showPopup: boolean
    aspectRatio?: Props['aspectRatio']
}>`
    background: #fff;
    width: 100%;
    max-width: ${(props) => (props.aspectRatio === 'tall' ? '450px' : '500px')};
    margin: 1rem;
    padding: 1.5rem;

    transform: ${(props) =>
        props.showPopup ? 'translateY(0)' : 'translateY(40px)'};
    opacity: ${(props) => (props.showPopup ? 1 : 0)};

    transition: ${(props) =>
        props.showPopup
            ? 'opacity 0.2s ease-out, transform 0.35s ease-out'
            : 'opacity 0.35s ease-in, transform 0.2s ease-in'};
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: -0.5rem -0.5rem 0 0;

    button {
        padding: 0.25rem;

        svg {
            stroke: ${(props) => props.theme.blueGray600};
        }
    }
`

const PopupContent = styled.div``

export const Popup: React.FC<Props> = ({
    children,
    showPopup,
    aspectRatio,
    togglePopupFn,
    showX,
}) => {
    return (
        <PopupContainer showPopup={showPopup}>
            <ContentWrapper showPopup={showPopup} aspectRatio={aspectRatio}>
                {showX ? (
                    <BtnWrapper>
                        <button onClick={togglePopupFn}>
                            <X />
                        </button>
                    </BtnWrapper>
                ) : null}

                <PopupContent>{children}</PopupContent>
            </ContentWrapper>
        </PopupContainer>
    )
}
