import styled from 'styled-components'

export const ContentWrapper = styled.div`
    max-width: 768px;
    margin: 2rem auto;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 3rem auto;
    }
`

export const BlogPostTop = styled.div`
    margin: 1.5rem 0;
    h3 {
        margin: 0 0 0.5rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.green400};
        font-size: ${(props) => props.theme.textSm};
    }

    h1 {
        font-family: ${(props) => props.theme.serif};
        font-weight: 500;
        margin: 0 0 0.875rem;
    }
`

export const DateAndReadTime = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 1rem;

    h4 {
        font-size: ${(props) => props.theme.textBase};
        color: ${(props) => props.theme.blueGray600};
        font-weight: 400;
        margin: 0 0 0.5rem;
        position: relative;
        font-family: ${(props) => props.theme.marcellus};

        &:first-child {
            margin: 0 1rem 0.5rem 0;

            &::after {
                margin: 0 0 0 1rem;
                content: '|';
                color: inherit;
            }
        }
    }
`

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 -1.5rem;
`

export const SocialLink = styled.a`
    display: block;
    padding: 0.75rem;
    margin: 0 0.5rem 0;

    svg {
        width: 20px;
        height: 20px;
        stroke-width: 1.8;
    }

    span {
        color: ${(props) => props.theme.blueGray500};

        svg {
            display: block;
            margin-right: 0.5rem;
        }

        span {
            display: none;
        }

        @media (min-width: ${(props) => props.theme.screenMd}) {
            display: flex;
            width: 100%;

            span {
                display: block;
            }
        }
    }
`

export const SocialButton = styled.button`
    display: block;
    padding: 0.75rem;
    position: relative;

    svg {
        width: 20px;
        height: 20px;
        stroke-width: 1.8;
    }
`

export const ActionStatusMsg = styled.div<{ show: boolean }>`
    position: absolute;
    bottom: 3rem;
    right: -70%;
    font-size: 14px;
    width: 100px;
    border-radius: 4px;
    padding: 0.5rem 0.875rem;
    background: #000;
    color: #fff;
    transition: 0.35s ease;
    opacity: ${(props) => (props.show ? 1 : 0)};
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
`

export const MainImage = styled.figure`
    margin: 2rem -1.25rem;
    img {
        width: 100%;
        height: auto;
        margin: 0 0 1rem;
    }

    figcaption {
        padding: 0 1.25rem;
        color: ${(props) => props.theme.green400};
        font-size: ${(props) => props.theme.textSm};
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        figcaption {
            max-width: ${(props) => props.theme.screenMd};
            margin: 0 auto;
            text-align: center;
        }
    }
`

export const MainContent = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        position: relative;
    }
`

export const ShareLinks = styled.div`
    display: none;
    height: max-content;

    h4 {
        font-size: ${(props) => props.theme.textSm};
        margin: 0 0 1rem;
        color: ${(props) => props.theme.blueGray600};
    }

    ${SocialLinks} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;

        ${SocialLink} {
            margin: 0.25rem 0;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: sticky;
        top: 25%;
        left: 0;
        margin-right: 1rem;
    }
`

export const Content = styled.div`
    p {
        margin: 0 0 1.5rem 0;
        color: ${(props) => props.theme.blueGray900s};
        max-width: 700px;

        img {
            width: 100%;
            height: auto;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin: 0 0 1.5rem 2rem;
    }
`

export const MoreFromUs = styled.div`
    margin: 0 0 3rem;
    padding: 0 0 1rem;

    h2 {
        font-size: ${(props) => props.theme.heading4};
        margin: 3rem 0 1rem;
    }
`
export const PostsContainer = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

export const BlogContainer = styled.div`
    margin: 1rem 0;
    padding: 0.5rem 0;
    max-width: 500px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 50%;
        padding: 0.5rem 0.5rem 0.5rem 0;
    }
`
