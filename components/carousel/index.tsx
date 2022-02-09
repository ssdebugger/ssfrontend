import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

import { ChevronLeft, ChevronRight } from 'react-feather'

const CarouselContainer = styled.section`
    position: relative;
    overflow: hidden;
`

const CarouselButton = css`
    display: none;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #333;
    z-index: 5;
    width: 60px;
    height: 60px;

    svg {
        stroke: #fff;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        width: 80px;
        height: 80px;
    }
`

const CarouselButton_Left = styled.button`
    ${CarouselButton}
    left: 0;
`
const CarouselButton_Right = styled.button`
    ${CarouselButton}
    right: 0;
`

const SlidesContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: max-content;
    transition: 0.5s ease-in-out;
`

const SlideContainer = styled.a`
    display: block;
    width: 100vw;
    height: calc(100vw / 1.41);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        height: calc(100vw / 3.072);
    }
`

const MobileImg = styled.img`
    display: block;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
const DesktopImg = styled.img`
    display: none;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

const Slide = ({
    children,
    href,
}: {
    children: React.ReactNode
    href: string
}) => {
    return (
        <Link href={href} passHref>
            <SlideContainer className='slide'>{children}</SlideContainer>
        </Link>
    )
}

export const Carousel = () => {
    useEffect(() => {
        let container = document.getElementById('slides_container')
        let containerWidth = container.offsetWidth
        let screenWidth = window.innerWidth
        let scrollValue = 0

        setInterval(() => {
            if (scrollValue < containerWidth - screenWidth) {
                scrollValue += screenWidth
                container.style.transform = `translate3d(-${scrollValue}px, 0, 0)`
            } 
            else{
                
                scrollValue = 0
                container.style.transform = `translate3d(-${scrollValue}px, 0, 0)`
            }
        }, 3000)
    }, [])

    return (
        <>
            <CarouselContainer>
                <CarouselButton_Left>
                    <ChevronLeft />
                </CarouselButton_Left>

                <CarouselButton_Right>
                    <ChevronRight />
                </CarouselButton_Right>

                <SlidesContainer id="slides_container">
                    <Slide href="/shop">
                        <MobileImg
                            src="/carouselimages/valentine_day/valentine_mobile.png"
                            alt="Sellsage Valentine Offer"
                        />

                        <DesktopImg
                            sizes="(max-width: 1536px) 100vw, 1536px"
                            srcSet="
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_730.png 730w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_863.png 863w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_981.png 981w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1097.png 1097w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1204.png 1204w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1308.png 1308w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1405.png 1405w,
                            /carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1536.png 1536w"
                            src="/carouselimages/valentine_day/valentine_desktop_b0ewnj_c_scale,w_1536.png"
                            alt="Sellsage Valentine Offer"
                        />
                    </Slide>

                    <Slide href="/shop">
                        <MobileImg
                            sizes="(max-width: 706px) 100vw, 706px"
                            srcSet="
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_200.png 200w,
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_349.png 349w,
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_458.png 458w,
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_551.png 551w,
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_637.png 637w,
                            /carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_706.png 767w"
                            src="/carouselimages/plantry/plantry-mobile_jzdzrt_c_scale,w_706.png"
                            alt="Plantry Banner"
                        />

                        <DesktopImg
                            sizes="(max-width: 1400px) 100vw, 1400px"
                            srcSet="
                            /carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_892.jpg 768w,
                            /carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_1108.jpg 1108w,
                            /carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_1289.jpg 1289w,
                            /carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_1372.jpg 1372w,
                            /carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_1400.jpg 1400w"
                            src="/carouselimages/plantry/plantry-desktop_utnd6o_c_scale,w_1400.jpg"
                            alt="Plantry Banner"
                        />
                    </Slide>
                    <Slide href="/GLOV-DOM-0030-0036">
                        <MobileImg
                            sizes="(max-width: 767px) 100vw, 767px"
                            srcSet="
                            /carouselimages/gloveup/gloveup-mobile_200.jpg 200w,
                            /carouselimages/gloveup/gloveup-mobile_477.jpg 477w,
                            /carouselimages/gloveup/gloveup-mobile_672.jpg 767w"
                            src="/carouselimages/gloveup/gloveup-mobile_672.jpg"
                            alt="Glove Up Banner"
                        />
                        <DesktopImg
                            sizes="(max-width: 1400px) 100vw, 1400px"
                            srcSet="
                            /carouselimages/gloveup/gloveup-desktop_950.jpg 768w,
                            /carouselimages/gloveup/gloveup-desktop_1213.jpg 1213w,
                            /carouselimages/gloveup/gloveup-desktop_1400.jpg 1400w"
                            src="/carouselimages/gloveup/gloveup-desktop_1400.jpg"
                            alt="Glove Up Banner"
                        />
                    </Slide>
                </SlidesContainer>
            </CarouselContainer>
        </>
    )
}
