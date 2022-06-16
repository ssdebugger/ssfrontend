import styled, { css } from 'styled-components'

export const Main = styled.main``

// Grid layout
interface GridProps {
    gap?: number | string
    columnSpacing?: number | string
    rowSpacing?: number | string
    justify?: 'space-between' | 'space-around'
}

interface GridItemProps {
    flex?: string | number
    flexBasis?: string
}

export const GridItem = styled.div<GridItemProps>`
    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex: ${(props) => props.flex};
        flex-basis: ${(props) => props.flexBasis};
    } ;
`

export const Grid = styled.div<GridProps>`
    display: flex;
    flex-wrap: wrap;

    justify-content: ${(props) => props.justify};

    ${GridItem} {
        padding: ${(props) =>
            props.gap && props.gap === 1 ? '1rem 1rem 0 0' : props.gap};
        padding: ${(props) =>
            props.columnSpacing && props.columnSpacing === 1
                ? '0 1rem 0 0'
                : props.columnSpacing === 3
                ? '0 1.5rem 0 0'
                : props.columnSpacing};

        padding: ${(props) =>
            props.rowSpacing && props.rowSpacing === 1
                ? '0 1rem 0 0'
                : props.rowSpacing === 3
                ? '0 1.5rem 0 0'
                : props.rowSpacing};
    }
`

const ContainerStyles = css`
    max-width: ${(props) => props.theme.screen2Xl};
    padding: 0 1.25rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 0 5rem;
    }
`

/**
 * Page Styling
 * - here is where the main page styling begins
 */

export const PageContainer = styled.main`
    margin: 60px 0;
`

export const IntroContent = styled.div`
    ${ContainerStyles}

    p {
        font-size: 1.25rem;
        margin: 0 auto;
        padding: 2rem 0;
        max-width: 800px;
        color: ${(props) => props.theme.blueGray900};

        @media (min-width: ${(props) => props.theme.screenMd}) {
            font-size: 1.5rem;
        }

        @media (min-width: ${(props) => props.theme.screenLg}) {
            font-size: 1.5rem;
        }
    }
`

export const PostsContainer = styled.div`
    ${ContainerStyles}
`

export const BannerImage = styled.img`
    width: 100vw;
    height: auto;
    margin: 0 -1.25rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: 100%;
        margin: auto;
    }
`
export const BannerContent = styled.div`
    p {
        color: ${(props) => props.theme.blueGray700};
    }

    h2 {
        font-size: ${(props) => props.theme.heading3};
        margin-top: 20px;
    }

    @media (min-width: ${(props) => props.theme.screenSm}) {
        font-size: ${(props) => props.theme.heading2};
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        h2 {
            font-size: ${(props) => props.theme.heading1};
            margin-top: 20px;
        }
    }
`
export const BannerPost = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        align-items: center;
        justify-content: center;

        ${BannerImage} {
            flex: 1;
        }

        ${BannerContent} {
            flex: 1;
            padding: 1rem 2rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 3rem 2rem;
    }
`

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem 0;

    iframe {
        width: 100%;
        max-width: 1024px;
        padding: 20px;
    }

    p {
        text-align: center;
        font-weight: 500;
        font-size: ${(props) => props.theme.large};
        color: #000;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        iframe {
            padding: 3rem 3rem 1rem;
            height: 600px;
        }

        p {
            font-size: ${(props) => props.theme.heading3};
            padding: 0;
        }
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        padding: 8rem 0;

        iframe {
            padding: 0 0 2rem;
            width: 1024px;
            height: 600px;
        }
    }
`

export const VideoContainerBg = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    background: ${(props) => props.theme.cream200};
`

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 2rem;

    img {
        width: 100%;
        height: auto;
    }

    button {
        width: max-content;
    }
    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-bottom: 4rem;
    }
`

export const ForMobile = styled.img`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
    }
`
export const ForDesktop = styled.img`
    display: none;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
    }
`
