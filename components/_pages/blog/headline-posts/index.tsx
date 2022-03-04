import Image from 'next/image'
import Link from 'next/link'

import { SubHeading } from '@/components/typography/heading'

import {
    Category,
    Heading,
    LatestPosts,
    Post,
    PostContainer,
    PostDate,
    PostDetails,
    PostImg,
} from './headline-posts-style'

import { Section, Container } from '../style'

import { PropsData } from '..'

export const HeadlinePosts: React.FC<PropsData> = ({ posts }) => {
    return (
        <Section>
            <Container>
                <SubHeading>Latest from us</SubHeading>

                <LatestPosts>
                    {posts.map((item) => (
                        <Post key={item.slug.current}>
                            <Link href={`/blog/${item.slug.current}`} passHref>
                                <PostContainer>
                                    <PostImg>
                                        <Image
                                            src={item.mainImage.asset.url}
                                            width={272}
                                            height={153}
                                            layout="responsive"
                                            objectFit="cover"
                                            objectPosition="top"
                                            alt={item.title}
                                        />
                                    </PostImg>

                                    <PostDetails>
                                        {/* <Category>{item.}</Category> */}
                                        <Heading>{item.title}</Heading>
                                        <PostDate>{item.publishedAt}</PostDate>
                                    </PostDetails>
                                </PostContainer>
                            </Link>
                        </Post>
                    ))}
                </LatestPosts>
            </Container>
        </Section>
    )
}
