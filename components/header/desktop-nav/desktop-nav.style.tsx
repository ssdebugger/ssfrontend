import styled from 'styled-components'

export const DesktopNavLinks = styled.ul`
    display: none;
    align-items: center;
    height: 100%;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: flex;
    }
`

export const NavLinkExpanded = styled.div`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 41;
    background: ${(props) => props.theme.cream100};
    transform: scaleY(0);
    transition: transform 0.15s ease, opacity 0ms linear 0.15s,
        visibility 0ms linear 0.1s;
    transform-origin: top center;
`

export const Background = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 40;

    width: 100vw;
    height: calc(100vh - 122px);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(7px);

    opacity: 0;
    pointer-events: none;

    visibility: visible;

    transition: opacity 0ms;
`

export const NavLinkExpandedWrapper = styled.div`
    position: relative;
    padding: 3rem 5rem;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    opacity: 0;
    tranform: translateY(-10px);
    transition: transform 0.1s, opacity 0.1s;
    transition-delay: 0s;
    z-index: 41;
`

export const ExpandedSection = styled.div`
    margin: 0 5rem 0 0;

    h3 {
        font-size: 1.125rem;
        font-family: ${(props) => props.theme.marcellus};
        font-weight: 500;
        margin-bottom: 1rem;
    }
`
export const ExpandedLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.25rem;

    a {
        display: block;
        padding: 0.25rem 0;
        color: ${(props) => props.theme.blueGray600};
        transition: ${(props) => props.theme.transition};
        border-bottom: 2px solid transparent;
        width: max-content;

        &:hover {
            color: ${(props) => props.theme.blueGray900};
            /* text-decoration: underline; */
            border-color: ${(props) => props.theme.cream500};
        }
    }
`

export const ExpandedSectionBlogs = styled.div`
    display: flex;
`
export const ExpandedBlog = styled.div`
    margin: 0 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        display: block;
        text-align: center;
    }

    h4 {
        max-width: 260px;
        text-align: center;
        font-weight: 400;
        font-size: 1.125rem;
        margin: 0.75rem auto;
        line-height: 1.5;
    }

    span {
        display: block;
        margin: 0.5rem 0 0 0;
        font-size: 0.875rem;
        color: ${(props) => props.theme.green500};
    }
`
export const BlogImg = styled.img`
    width: 285px;
    height: 160px;
    aspect-ratio: 16/9;
    object-fit: cover;
`

export const NavLink = styled.li`
    margin: 0 0.25rem;
    height: 100%;
    border-bottom: 2px solid transparent;

    > a {
        display: block;
        padding: 1rem;
    }

    &:hover {
        border-color: ${(props) => props.theme.cream500};

        ${Background} {
            transition: opacity 0ms, visibility 0ms;
            visibility: visible;
            opacity: 1;
        }

        ${NavLinkExpanded} {
            transition: transform 0.3s ease, opacity 0ms, visibility 0ms;
            visibility: visible;
            opacity: 1;
            transform: scaleY(1);
        }

        ${NavLinkExpandedWrapper} {
            transition: transform 0.3s ease, opacity 0.2s linear;
            transition-delay: 0.2s;
            opacity: 1;
            transform: translateY(0);
        }
    }
`
