import React from 'react'
import styled from 'styled-components'

const DisposableContainer = styled.div`
    min-height: 300px;
    margin: 0.5rem 0;

    @media (min-width: 768px) {
        display: 500px;
        margin: 1rem 0 2.5rem;
    }

    img {
        width: 100%;
        height: auto;
    }
`

const DisposableMobileImg = styled.img`
    @media (min-width: 768px) {
        display: none;
    }
`
const DisposableDesktopImg = styled.img`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

export const Infographic = () => {
    return (
        <DisposableContainer>
            <DisposableMobileImg
                sizes="(max-width: 706px) 100vw, 706px"
                src="/carouselimages/Disposable_dinnerware/disposable_dinnerware_plastic_mobile.webp"
                alt="Disposable dinnerware vs plastic"
                loading='lazy'
            />

            <DisposableDesktopImg
                sizes="(max-width: 706px) 100vw, 706px"
                src="/carouselimages/Disposable_dinnerware/disposable_dinnerware_plastic_desktop.webp"
                alt="Disposable dinnerware vs plastic"
                loading='lazy'
            />
        </DisposableContainer>
    )
}
