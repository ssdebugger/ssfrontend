import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

const MobileImg = styled.img`
    @media (min-width: 768px) {
        display: none;
    }
`
const DesktopImg = styled.img`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

export const Infographic = () => {
    return (
        <Container>
            <MobileImg
                sizes="(max-width: 706px) 100vw, 706px"
                src="/carouselimages/plantry/plantrymobile_comp.jpg"
                alt="Plantry Banner"
            />

            <DesktopImg
                sizes="(max-width: 706px) 100vw, 706px"
                src="/carouselimages/plantry/plantrydesktop_comp.jpg"
                alt="Plantry Banner"
            />
        </Container>
    )
}
