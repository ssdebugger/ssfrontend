import React, { useEffect,useRef } from 'react'
import styled from 'styled-components'
import { HyperLink } from '../header'
import { ChevronLeft, ChevronRight } from 'react-feather'


const DisposableMobileImg = styled.img`
    display: block;
    width: 100%;
    height:266px;
    aspect-ratio: 1:1;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
const DisposableDesktopImg = styled.img`
    display: none;
    min-width:100%;
    height:500px;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

const DisposableLeft = styled.div`
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

const DisposableRight = styled.div`
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
    
`

export const Carousel = () => {
    const index =  useRef(0)
    const numberOfSlides = 3

    const scrollbanner = (direction) => {
        const disposableContainer =
            document.querySelector<HTMLElement>('.disposable-dinnerware-container')

        if (direction == 'left') {
            const screenWidth = -window.innerWidth
            // if (index < 0) {
            //     index = 4
            // }
            disposableContainer.scrollBy(-screenWidth, 0)
            index.current = index.current % numberOfSlides
            let imageToMove =
                disposableContainer.querySelectorAll<HTMLElement>(`.carouselItem`)[
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
            disposableContainer.scrollBy(screenWidth, 0)
            index.current = index.current % numberOfSlides
            let imageToMove =
                disposableContainer.querySelectorAll<HTMLElement>(`.carouselItem`)[
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

        const disposableContainer =
            document.querySelector<HTMLElement>('.disposable-dinnerware-container')

        const speed = 5
        setInterval(() => {
            disposableContainer.scrollBy(screenWidth, 0)
            let timeoutX = setTimeout(() => {
                index.current = index.current % numberOfSlides
                let imageToMove =
                    disposableContainer.querySelectorAll<HTMLElement>(
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
        const disposableWrapper =
            document.querySelector<HTMLElement>('.disposable-dinnerware-wrapper')
        disposableWrapper.addEventListener('mouseenter', function () {
            const screenWidth = window.innerWidth

            if (screenWidth > 600) {
                document.getElementById('DisposableLeft').style.display = 'flex'
                document.getElementById('DisposableRight').style.display = 'flex'
            }
        })
        disposableWrapper.addEventListener('mouseleave', function () {
            document.getElementById('DisposableLeft').style.display = 'none'
            document.getElementById('DisposableRight').style.display = 'none'
        })
    }, [])

    return (
        <>
            <div className="disposable-dinnerware-wrapper">
                <DisposableLeft id="DisposableLeft" onClick={() => scrollbanner('left')}>
                    <div className="disposable-dinnerware-left">
                        <ChevronLeft />
                    </div>
                </DisposableLeft>
                <DisposableRight
                    id="DisposableRight"
                    onClick={() => scrollbanner('right')}
                >
                    <div className="disposable-dinnerware-right">
                        <ChevronRight />
                    </div>
                </DisposableRight>
                <div className="disposable-dinnerware-container">
                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <DisposableMobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_dinnerware/disposable_freecutlery_mobile.PNG"
                                alt="Disposable dinnerware"
                            />
                            <DisposableDesktopImg
                                sizes="(max-width: 1400px) 100vw, 1400px"
                                src="/carouselimages/Disposable_dinnerware/disposable_freecutlery_desktop.PNG"
                                alt="Disposable dinnerware"
                            />
                        </HyperLink>
                    </div>
                    {/* <div className="carouselItem">
                        <HyperLink href="/shop">
                            <DisposableMobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_dinnerware/disposable_dinnerware_mobile.PNG"
                                alt="Disposable dinnerware"
                            
                            />

                            <DisposableDesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_dinnerware/disposable_dinnerware_desktop.PNG"
                                alt="Disposable dinnerware"
                            
                            />
                        </HyperLink>
                    </div> */}


                    {/* <div className="carouselItem">
                        <HyperLink href="/shop">
                            <DisposableMobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/plantry/plantrymobile_comp.png"
                                alt="Plantry Banner"
                            />

                            <DisposableDesktopImg
                            sizes="(max-width: 706px) 100vw, 706px"
                            src="/carouselimages/plantry/plantrydesktop_comp.png"
                            alt="Plantry Banner"
                            />
                        </HyperLink>
                    </div> */}

                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <DisposableMobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_cutlery/disposable_cutlery_mobile.PNG"
                                alt="Disposable cutlery"
                                loading='lazy'
                            />

                            <DisposableDesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_cutlery/disposable_cutlery_desktop.PNG"
                                alt="Disposable cutlery"
                                loading='lazy'
                            />
                        </HyperLink>
                    </div>
                    <div className="carouselItem">
                        <HyperLink href="/shop">
                            <DisposableMobileImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_tableware/disposable_tableware_mobile.PNG"
                                alt="Disposable tableware"
                                loading='lazy'
                            />

                            <DisposableDesktopImg
                                sizes="(max-width: 706px) 100vw, 706px"
                                src="/carouselimages/Disposable_tableware/disposable_tableware_desktop.PNG"
                                alt="Disposable tableware"
                                loading='lazy'
                            />
                        </HyperLink>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .disposable-dinnerware-wrapper {
                    position: relative;
                    min-width: 100%;
                }
                .disposable-dinnerware-left {
                    position: absolute;
                    top: 40%;
                    left: 0rem;
                }
                .disposable-dinnerware-right {
                    position: absolute;
                    top: 40%;
                    right: 0rem;
                }

                .disposable-dinnerware-container {
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
                .disposable-dinnerware-container::-webkit-scrollbar {
                    display: none;
                }

                .disposable-dinnerware-container .carouselItem {
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
