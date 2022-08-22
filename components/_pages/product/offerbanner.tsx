import styled from 'styled-components'
import { HyperLink } from '@/components/header'

const DisposableMobileImg = styled.img`
    display: block;
    width: 100vw;
    height: 100%;
    object-fit: cover;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
const DisposableDesktopImg = styled.img`
    display: none;
    width: 100vw;
    object-fit: cover;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`

const OfferBanner = () => {
    return (
        <>
            <HyperLink href="/shop">
                <DisposableMobileImg
                    sizes="(max-width: 706px) 100vw, 706px"
                    src="/carouselimages/productmobile.webp"
                    alt="Disposable cutlery"
                    loading="lazy"
                />

                <DisposableDesktopImg
                    sizes="(max-width: 706px) 100vw, 706px"
                    src="/carouselimages/productdesktop.webp"
                    alt="Disposable cutlery"
                    loading="lazy"
                />
            </HyperLink>
        </>
    )
}

export default OfferBanner
