import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'
import { PostType } from '..'

const CardContainer = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`

const PostImage = styled.div`
    min-width: 105px;
    min-height: 105px;

    border-radius: 10px;
    overflow: hidden;

    img {
        aspect-ratio: 1/1;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: 132px;
        height: 132px;
    }
`

// Post Details Styles
const PostDetails = styled.div`
    padding-left: 1rem;
    max-width: 400px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-left: 1.5rem;
    }
`

const PostCategory = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    color: #628272;
`
const PostHeading = styled.h4`
    font-size: 1.125rem;
    margin: 0.25rem 0 0.5rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        font-size: 1.25rem;
    }
`
const PostDate = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
`

export const MFUCard: React.FC<PostType> = ({
    mainImage,
    publishedAt,
    slug,
    title,
}) => {
    return (
        <Link href={`/blog/${slug.current}`} passHref>
            <CardContainer>
                <PostImage>
                    <Image
                        width={80}
                        height={80}
                        layout="responsive"
                        src={mainImage.asset.url}
                        objectFit="cover"
                        alt={title}
                    />
                </PostImage>

                <PostDetails>
                    {/* <PostCategory>POST CATEGOEY</PostCategory> */}
                    <PostHeading>{title}</PostHeading>
                    <PostDate>{publishedAt}</PostDate>
                </PostDetails>
            </CardContainer>
        </Link>
    )
}
