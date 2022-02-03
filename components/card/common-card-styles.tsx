import styled, { keyframes } from 'styled-components'

export const breatheInOut = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 1.2rem;
`
export const CardImage = styled.img`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transition: ${(props) => props.theme.transition};
    transition-duration: 0.1s;
`

export const LifeStyleImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: ${(props) => props.theme.transition};
`
export const CardStyles = styled.div`
    position: relative;
    padding: 1rem 0;
    margin: 0.625rem;
    flex-basis: calc(100% - (0.625rem * 2));

    @media (min-width: ${(props) => props.theme.screenXs}) {
        flex-basis: calc(50% - (0.625rem * 2));
    }

    @media (min-width: ${(props) => props.theme.screenSm}) {
        flex-basis: calc(33.33% - (0.625rem * 2));
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: calc(24.9% - (0.625rem * 2));
    }
`

export const CardContents = styled.div`
    &:hover,
    &:focus {
        ${LifeStyleImage} {
            opacity: 1;
        }

        ${CardImage} {
            opacity: 0;
        }
    }
`
