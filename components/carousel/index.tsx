import React, { useEffect,useRef } from 'react'
import styled from 'styled-components'
import { HyperLink } from '../header'
import { ChevronLeft, ChevronRight } from 'react-feather'


const MobileImg = styled.img`
    display: block;
    min-width: 100%;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
const DesktopImg = styled.img`
    display: none;
    min-width: 100%;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

const Arrowleft = styled.div`
    position: absolute;
    left: 0;
    top: 40%;
    display: none;
    cursor: pointer;
    background: white;
    min-height: 20%;
    min-width: 2.5rem;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

const Arrowright = styled.div`
    position: absolute;
    right: 0;
    top: 40%;
    display: none;
    cursor: pointer;
    background: white;
    min-height: 20%;
    min-width: 2.5rem;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const Carousel = () => {
    const index =  useRef(0)
    const numberOfSlides = 3

    const scrollbanner = (direction) => {
        const bannerContainer =
            document.querySelector<HTMLElement>('.bannerContainer')

        if (direction == 'left') {
            const screenWidth = -window.innerWidth
            // if (index < 0) {
            //     index = 4
            // }
            bannerContainer.scrollBy(-screenWidth, 0)
            index.current = index.current % numberOfSlides
            let imageToMove =
                bannerContainer.querySelectorAll<HTMLElement>(`.carouselItem`)[
                    index.current
                ]
            // The line below move the item to end of carousel by
            // manipulating its flex order
            imageToMove.style.order =
                imageToMove.style.order && imageToMove.style.order === String(0)
                    ? String(1)
                    : String(+Number(imageToMove.style.order) + 1)
            index.current++
        } else {
            const screenWidth = window.innerWidth
            bannerContainer.scrollBy(screenWidth, 0)
            index.current = index.current % numberOfSlides
            let imageToMove =
                bannerContainer.querySelectorAll<HTMLElement>(`.carouselItem`)[
                    index.current
                ]
            // The line below move the item to end of carousel by
            // manipulating its flex order
            imageToMove.style.order =
                imageToMove.style.order && imageToMove.style.order === String(0)
                    ? String(1)
                    : String(+Number(imageToMove.style.order) + 1)
            index.current++
        }
    }
    useEffect(() => {
        const screenWidth = window.innerWidth

        const bannerContainer =
            document.querySelector<HTMLElement>('.bannerContainer')

        const speed = 5
        setInterval(() => {
            bannerContainer.scrollBy(screenWidth, 0)
            let timeoutX = setTimeout(() => {
                index.current = index.current % numberOfSlides
                let imageToMove =
                    bannerContainer.querySelectorAll<HTMLElement>(
                        `.carouselItem`
                    )[index.current]
                // The line below move the item to end of carousel by
                // manipulating its flex order
                imageToMove.style.order =
                    imageToMove.style.order &&
                    imageToMove.style.order === String(0)
                        ? String(1)
                        : String(+Number(imageToMove.style.order) + 1)
                index.current++
                clearTimeout(timeoutX)
            }, 1000)
        }, speed * 1000)
        const bannerWrapper =
            document.querySelector<HTMLElement>('.bannerWrapper')
        bannerWrapper.addEventListener('mouseenter', function () {
            const screenWidth = window.innerWidth

            if (screenWidth > 600) {
                document.getElementById('arrowleft').style.display = 'flex'
                document.getElementById('arrowright').style.display = 'flex'
            }
        })
        bannerWrapper.addEventListener('mouseleave', function () {
            document.getElementById('arrowleft').style.display = 'none'
            document.getElementById('arrowright').style.display = 'none'
        })
    }, [])

    return (
        <>
            <div className="bannerWrapper">
                <Arrowleft id="arrowleft" onClick={() => scrollbanner('left')}>
                    <div className="leftContainer">
                        <ChevronLeft />
                    </div>
                </Arrowleft>
                <Arrowright
                    id="arrowright"
                    onClick={() => scrollbanner('right')}
                >
                    <div className="rightContainer">
                        <ChevronRight />
                    </div>
                </Arrowright>
                <div className="bannerContainer">
                    {/* <div className="carouselItem">
                        <HyperLink href="/shop">
                            <MobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/offer/easter_mobile.png"
                                alt="Easter offer"
                            />
                            <DesktopImg
                                sizes="(max-width: 1400px) 100vw, 1400px"
                                src="/carouselimages/offer/easter_desktop.png"
                                alt="Easter offer"
                            />
                        </HyperLink>
                    </div> */}
                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <MobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/offer/mothersday_mobile.webp"
                                alt="Mothers Day offer"
                            
                            />

                            <DesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/offer/mothersday_desktop.webp"
                                alt="Mothers Day offer"
                            
                            />
                        </HyperLink>
                    </div>


                    {/* <div className="carouselItem">
                        <HyperLink href="/shop">
                            <MobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/plantry/plantrymobile_comp.png"
                                alt="Plantry Banner"
                            />

                            <DesktopImg
                            sizes="(max-width: 706px) 100vw, 706px"
                            src="/carouselimages/plantry/plantrydesktop_comp.png"
                            alt="Plantry Banner"
                            />
                        </HyperLink>
                    </div> */}

                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <MobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/plantry/gloveupmobile_comp.webp"
                                alt="Gloveup Banner"
                                loading='lazy'
                            />

                            <DesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/plantry/gloveupdesktop_comp.webp"
                                alt="Gloveup Banner"
                                loading='lazy'
                            />
                        </HyperLink>
                    </div>
                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <MobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Gloveup/gloveupmobile_comp.webp"
                                alt="Gloveup Banner"
                                loading='lazy'
                            />

                            <DesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Gloveup/gloveupdesktop_comp.webp"
                                alt="Gloveup Banner"
                                loading='lazy'
                            />
                        </HyperLink>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bannerWrapper {
                    position: relative;
                    min-width: 100%;
                }
                .leftContainer {
                    position: absolute;
                    top: 40%;
                    left: 0rem;
                }
                .rightContainer {
                    position: absolute;
                    top: 40%;
                    right: 0rem;
                }

                .bannerContainer {
                    display: flex;
                    min-width: 100%;
                    flex-wrap: nowrap;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    overflow-x: auto;
                    scrollbar-width: 0;
                    scrollbar-color: transparent transparent;
                    scroll-behavior: smooth;
                    scroll-snap-type: x mandatory;
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
