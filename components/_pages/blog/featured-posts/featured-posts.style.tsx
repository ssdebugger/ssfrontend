import styled from 'styled-components'
import { ScrollbarStyles } from 'theme'

export const FeaturedPostsContainer = styled.section`
    background: ${(props) => props.theme.green700};
    overflow: hidden;
    padding: 2rem 1.25rem;

    h2 {
        color: #fff;
        margin-bottom: 1.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 3.5rem 4rem;

        h2 {
            color: #fff;
            margin-bottom: 2rem;
        }
    }
`

export const PostContainer = styled.div`
    width: calc(100vw - 1.25rem);
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: calc(100vw - 4rem);
    }
`
export const PostList = styled.ul`
    ${ScrollbarStyles}

    scrollbar-color: #D39B75 #fafafa;

    &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: #d39b75;
    }

    &::-webkit-scrollbar-track {
        background: #fafafa;
    }

    width: 100%;
    display: felx;
    align-items: center;
    overflow: auto;
`

export const Post = styled.li`
    margin-bottom: 1.5rem;
    margin-right: 1rem;

    &:last-child {
        margin-right: 4rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin-right: calc(1.63265vw + 1.97095 * (1vw - 7.35px));

        &:last-child {
            margin-right: 8rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin-right: min(calc(1.87091vw + 3.51993 * (1vw - 10.69px)), 40px);
    }
`
