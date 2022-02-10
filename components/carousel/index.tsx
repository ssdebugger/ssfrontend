import React, { useEffect } from 'react'
import styled from 'styled-components'
import { HyperLink } from '../header'

const MobileImg = styled.img`
    display: block;
    min-width:100%;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
const DesktopImg = styled.img`
    display: none;
    min-width:100%;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

export const Carousel = () => {
    useEffect(() => {
        let index = 0
        const numberOfSlides = 3
        const bannerContainer = document.querySelector<HTMLElement>('.bannerContainer') 
        let screenWidth = window.innerWidth
        const speed=5
        setInterval(() => {
            bannerContainer.scrollBy(screenWidth, 0)
            
            let timeoutX = setTimeout(() => {
                index = index % numberOfSlides
                let imageToMove =
                    bannerContainer.querySelectorAll<HTMLElement>(
                        `.carouselItem`
                    )[index]
                // The line below move the item to end of carousel by
                // manipulating its flex order
                imageToMove.style.order =
                    imageToMove.style.order &&
                    imageToMove.style.order === String(0)
                        ? String(1)
                        : String(+Number(imageToMove.style.order) + 1)
                index++
                clearTimeout(timeoutX)
            }, 1000)
        }, speed*1000)
    }, [])

    return (
        <>
            <div className="bannerWrapper">
                <div className="bannerContainer">
                    <div className="carouselItem">
                        <HyperLink href="/shop">
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
                        </HyperLink>
                    </div>
                    <div className="carouselItem">
                        <HyperLink href="/shop">
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
                        </HyperLink>
                    </div>
                    <div className="carouselItem">
                        <HyperLink href="/GLOV-DOM-0030-0036">
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
                        </HyperLink>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bannerWrapper {
                    position: relative;
                    min-width:100%;
                }

                .bannerContainer {
                    display: flex;
                    min-width:100%;
                    flex-wrap: nowrap;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    overflow-x: auto;
                    scrollbar-width: 0;
                    scrollbar-color: transparent transparent;
                    ::-webkit-scroll-behavior:smooth;
                    ::-webkit-scroll-snap-type:x mandatory;;

                }
                .bannerContainer::-webkit-scrollbar {
                    display: none;
                }
                
                .bannerContainer .carouselItem {
                    flex-grow: 0;
                    flex-shrink: 0;
                    min-width: 100%;
                    // we are telling browser to align each item centrally to
                    // screen as it scrolls into viewport
                    scroll-snap-align: center;
                }
            `}</style>
        </>
    )
}
