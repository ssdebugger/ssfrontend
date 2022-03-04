import styled, { css } from 'styled-components'

export const LatestPosts = styled.ul`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2.5rem;
    }
`

export const PostDetails = styled.div`
    padding: 1rem 0;
`

export const Category = styled.span`
    color: #628272;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
`
export const Heading = styled.h3`
    margin: 0.25rem 0rem 0.5rem;
    font-size: 1.125rem;
    line-height: 115%;
`

export const PostDate = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
`

export const PostImg = styled.div`
    display: block;
    border-radius: 10px;
    overflow: hidden;
`

export const PostContainer = styled.a`
    display: block;
    font-size: 1.125rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        ${Heading} {
            font-size: 1.75rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        ${Heading} {
            font-size: 1.25rem;
        }
    }
`

const HeadlinePost = css`
    &:first-child ${PostContainer} {
        display: block;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 4 / 5;

        ${PostImg} {
            height: 100%;

            div {
                height: 100%;
            }

            &::after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: '';
                background: linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.77311) 12.83%,
                    rgba(0, 0, 0, 0.72685) 24%,
                    rgba(0, 0, 0, 0.66487) 33.77%,
                    rgba(0, 0, 0, 0.59081) 42.37%,
                    rgba(0, 0, 0, 0.50831) 50.07%,
                    rgba(0, 0, 0, 0.421) 57.13%,
                    rgba(0, 0, 0, 0.33252) 63.78%,
                    rgba(0, 0, 0, 0.24652) 70.3%,
                    rgba(0, 0, 0, 0.16663) 76.92%,
                    rgba(0, 0, 0, 0.09648) 83.91%,
                    rgba(0, 0, 0, 0.03973) 91.52%,
                    rgba(0, 0, 0, 0)
                );
            }
        }

        ${PostDetails} {
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;
            padding: 0 1.25rem 1.25rem;
        }

        ${Heading} {
            margin: 0.25rem 0rem 0.5rem;
            font-size: 1.5rem;
            line-height: 115%;
        }

        ${PostDate} {
            font-size: 0.875rem;
            font-weight: 500;
            color: #fff;
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        &:first-child {
            grid-column: 1 / 5;
            max-height: 600px;

            ${PostContainer} {
                width: 100%;
                height: 100%;

                ${PostDetails} {
                    padding: 0 2.5rem 2.5rem;
                }
            }
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        &:first-child ${PostContainer} {
            ${Heading} {
                font-size: 1.75rem;
            }
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        &:first-child ${PostContainer} {
            ${Heading} {
                font-size: 2.25rem;
            }
        }
    }
`

export const Post = styled.li`
    margin-bottom: 1.5rem;

    ${HeadlinePost}
`
