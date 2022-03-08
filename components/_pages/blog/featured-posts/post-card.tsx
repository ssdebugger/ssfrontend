import styled, { css } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '..'

const blackLinearGradient = css`
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
`

const PostContainer = styled.a`
    display: block;
    position: relative;
    width: 280px;
    height: auto;
    aspect-ratio: 4 / 5;
    border-radius: 10px;
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: 692px;
        height: 389px;
        aspect-ratio: 16 / 9;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        width: 980px;
        height: 551px;
    }
`

const PostImg = styled.div`
    display: block;
    height: 100%;
    ${blackLinearGradient}

    div {
        height: 100%;
    }
`

const PostDetails = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: 0 1.25rem 1.25rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 2.25rem 2.25rem;
    }
`

const Heading = styled.h3`
    margin: 0.25rem 0rem 0.5rem;
    font-size: 1.5rem;
    line-height: 125%;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        font-size: 1.75rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        font-size: 2.5rem;
    }
`

const PostDate = styled.span`
    font-size: 0.875rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        font-size: 1rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        font-size: 1.125rem;
    }
`

export const PostCard: React.FC<PostType> = ({
    mainImage,
    publishedAt,
    slug,
    title,
}) => {
    return (
        <Link href={`/blog/${slug.current}`} passHref>
            <PostContainer>
                <PostImg>
                    <Image
                        src={mainImage.asset.url}
                        width={272}
                        height={153}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="top"
                        alt={title}
                    />
                </PostImg>

                <PostDetails>
                    {/* <Category>{item.}</Category> */}
                    <Heading>{title}</Heading>
                    <PostDate>{publishedAt}</PostDate>
                </PostDetails>
            </PostContainer>
        </Link>
    )
}
