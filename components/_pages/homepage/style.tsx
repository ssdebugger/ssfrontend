import styled, { css } from 'styled-components'

/**
 * New styles belonging to homepage.
 * NOTE: These styles are not to be removed
 * */
export const HomepageContainerStyles = css`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 4rem ${(props) => props.theme.spacingTablet};
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 4rem ${(props) => props.theme.spacingTabletHorizontal};
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 4rem ${(props) => props.theme.spacingDesktop};
    }
`

import { CardStyles } from '@/components/card/common-card-styles'

const Container = styled.div`
    display: inline-block;
    width: 100%;
    margin: 1rem auto;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 2.5rem auto;
    }
`

/* Common Components */
export const HorizontalScrollable = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
`
export const ScrollableContainer = styled.div`
    display: flex;
    width: max-content;
`

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const GridItem = styled.div<{
    sm?: number
    md?: number
    lg?: number
}>`
    flex-basis: ${(props) => props.sm || '100'}%;
    padding: 0 0.5rem;

    @media (min-width: 600px) {
        flex-basis: ${(props) => props.md || '33.33'}%;
        margin: 0.625rem 0;
    }
`

export const SectionHeading = styled.h3<{
    textAlign?: string
    fontWeight?: string
    margin?: string
    cursor?: string
}>`
    display: inline-block;
    margin: ${(props) => props.margin || '0 0 1.5rem'};
    cursor: ${(props) => props.cursor || 'none'};
    font-size: 1.25rem;
    text-align: ${(props) => props.textAlign};
    width: 100%;
    font-weight: ${(props) => props.fontWeight || 600};

    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`
export const SectionTop = styled.div`
    display: flex;
`

/* Individual Sections */
export const HeroSection = styled(Container)`
    padding: 1rem;
    background-color: rgba(255, 255, 255, 1);

    @media (max-width: ${(props) => props.theme.screenMd}) {
        padding: 2rem;
    }
`

export const SectionLink = styled.div`
    margin: 3rem 0 1rem;
`

export const Catalog = styled(Container)`
    padding: 3rem 1rem;
    background-color: ${(props) => props.theme.tertiaryTint1};
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.screenSm}) {
        ${CardStyles} {
            min-width: 70% !important;
        }
    }

    @media (max-width: ${(props) => props.theme.screenMd}) {
        ${GridContainer} {
            margin: 0 -2rem;
            padding: 0 1rem;
            flex-wrap: nowrap;
            overflow: auto;

            ${CardStyles} {
                min-width: 350px;
                max-width: 400px;
            }
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin-left: -4rem;
    }

    @media (min-width: 1600px) {
        margin-left: calc(((100vw - 2rem) - 1660px) * -1);
        margin-right: calc(((100vw - 2rem) - 1660px) * -1);
    }
`

export const BrandIcons = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 2rem;
`

export const OurProducts = styled(Container)`
    padding: 1rem;
    background-color: rgba(255, 255, 255, 1);
`
export const NewLaunches = styled(Container)`
    padding: 1rem;
`
export const Accredited = styled(Container)`
    padding: 1rem;
    background-color: ${(props) => props.theme.primary1};
    padding: 2rem 0;
    color: #fff;

    @media (max-width: ${(props) => props.theme.screenMd}) {
        /* margin: 0 -2rem; */
        padding: 2rem 1rem;
        flex-wrap: nowrap;
        overflow: auto;
        width: 100vw;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin-left: -4rem;
        width: 100vw;
    }

    @media (min-width: 1600px) {
        margin-left: calc(((100vw - 2rem) - 1660px) * -1);
        margin-right: calc(((100vw - 2rem) - 1660px) * -1);
    }
`

export const ImageOfferContainer = styled.div`
    margin: 1rem 0;
    padding: 0.25rem 0;
    background: ${(props) => props.theme.tertiaryTint1};

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 2rem 0;
        margin: 2rem -4rem;

        width: 100vw;
    }

    @media (min-width: 1600px) {
        margin-left: calc(((100vw - 2rem) - 1660px) * -1);
        margin-right: calc(((100vw - 2rem) - 1660px) * -1);
    }
`

export const ImageOfferContents = styled(Container)`
    display: flex;
    padding: 1rem;
    margin: 2rem auto;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1400px;

    @media (min-width: 1600px) {
        max-width: 1600px;
    }
`

export const ImageOffer = styled.div`
    margin: 0.5rem 0;
    flex-basis: 100%;
    overflow: hidden;

    img {
        transition: ${(props) => props.theme.transition};
        transition-duration: 0.5s;
    }

    &:hover,
    &:focus {
        img {
            transform: scale(1.05);
        }
    }

    @media (min-width: ${(props) => props.theme.screenSm}) {
        margin: 0.5rem;
        flex-basis: calc(100% / 2 - 1rem);
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-basis: calc(100% / 3 - 1rem);
    }
`

export const BundleSection = styled(HeroSection)`
    @media (max-width: ${(props) => props.theme.screenSm}) {
        ${CardStyles} {
            min-width: 70% !important;
        }
    }

    @media (max-width: ${(props) => props.theme.screenMd}) {
        ${GridContainer} {
            margin: 0 -2rem;
            padding: 0 1rem;
            flex-wrap: nowrap;
            overflow: auto;

            ${CardStyles} {
                min-width: 350px;
                max-width: 400px;
            }
        }
    }
`

export const AccredCertificates = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1400px;
    padding: 1rem 2rem 0;
    margin: 0 auto;
`
export const AccredIcons = styled(BrandIcons)`
    margin-bottom: 1.75rem;

    &:last-child {
        margin-right: 0;
    }
`
export const ChooseUs = styled(Container)`
    margin: 1rem 0;
    padding: 1rem;
`
export const ChooseUsWrapper = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ReasonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    flex-basis: 45%;

    @media (min-width: 600px) {
        flex-basis: 25%;
    }
`

export const ChooseUsText = styled.span`
    display: inline-block;
    margin-top: 0.8rem;
    font-size: 0.875rem;
`

export const ChooseUsIcon = styled(BrandIcons)`
    width: 80px;
    height: 80px;
    margin-right: 0;
`
