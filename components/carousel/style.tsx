import styled from 'styled-components'

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100vw;
    max-height: 450px;
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: calc(100% + (4rem * 2));
        height: 100vw;
        max-height: 450px;
        overflow: hidden;
        margin-left: calc(4rem * -1);
        margin-right: calc(4rem * -1);
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        width: 100vw;
        max-height: 500px;
    }

    @media (min-width: 1600px) {
        margin-left: calc(((100vw - 2rem) - 1660px) * -1);
        margin-right: calc(((100vw - 2rem) - 1660px) * -1);
    }
`
export const ItemsContainer = styled.div<{
    width?: number
    translateValue: number
}>`
    width: ${(props) => props.width && props.width};
    transform: ${(props) => `translate(${props.translateValue}px)`};
    height: 100%;
`

export const Item = styled.div`
    float: left;
    width: 100vw;
    height: 100%;
`

export const ItemImage = styled.img`
    object-fit: cover;
`

export const CarouselDotBox = styled.div`
    text-align: center;
`

export const Dot = styled.div<{ active?: boolean }>`
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 0.25rem;
    background: ${(props) => (props.active ? '#15B76E' : '#d4d4d4')};
`
